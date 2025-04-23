require('dotenv').config();
const express = require('express');
const { TriggerClient } = require('@trigger.dev/sdk');
const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

const app = express();
const port = process.env.HTTP_SERVER_PORT || 3000;

// Initialize Trigger.dev client with error handling
let client;
try {
  client = new TriggerClient({
    id: "colliers-dealhub",
    apiKey: process.env.TRIGGER_API_KEY,
    apiUrl: process.env.TRIGGER_API_URL
  });
  logger.info('Trigger.dev client initialized successfully');
} catch (error) {
  logger.error('Failed to initialize Trigger.dev client:', error);
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enhanced health check endpoint
app.get('/health', (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    triggerClient: client ? 'connected' : 'disconnected'
  };
  res.json(health);
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// Start the server
const server = app.listen(port, () => {
  logger.info(`Webapp server running on port ${port}`);
});

// Graceful shutdown
const shutdown = async () => {
  logger.info('Shutting down server...');
  
  try {
    // Close the server
    await new Promise((resolve) => server.close(resolve));
    logger.info('Server closed');
    
    // Cleanup Trigger.dev client if needed
    if (client) {
      await client.close();
      logger.info('Trigger.dev client closed');
    }
    
    process.exit(0);
  } catch (error) {
    logger.error('Error during shutdown:', error);
    process.exit(1);
  }
};

// Handle shutdown signals
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  shutdown();
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  shutdown();
}); 