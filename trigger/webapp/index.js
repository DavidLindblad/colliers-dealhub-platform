require('dotenv').config();
const express = require('express');
const { TriggerClient } = require('@trigger.dev/sdk');

const app = express();
const port = process.env.HTTP_SERVER_PORT || 3000;

// Initialize Trigger.dev client
const client = new TriggerClient({
  id: "colliers-dealhub",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL
});

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
app.listen(port, () => {
  console.log(`Webapp server running on port ${port}`);
}); 