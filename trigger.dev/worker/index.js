require('dotenv').config();
const { TriggerClient } = require('@trigger.dev/sdk');

// Initialize Trigger.dev client
const client = new TriggerClient({
  id: 'colliers-dealhub-worker',
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL
});

// Define jobs
client.defineJob({
  id: 'example-job',
  name: 'Example Job',
  version: '1.0.0',
  trigger: client.defineEventTrigger({
    name: 'example.event',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    }
  }),
  run: async (payload, io, ctx) => {
    await io.logger.info('Received event', { payload });
    return { success: true };
  }
});

// Start the worker
client.start(); 