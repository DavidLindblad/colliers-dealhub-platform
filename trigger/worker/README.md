# Colliers DealHub Workers

This directory contains the background workers and job processors for the Colliers DealHub platform.

## Workers
- **Data Processor**: Handles data processing and transformation tasks
- **Report Generator**: Generates scheduled reports
- **Notification Worker**: Manages notification queues and delivery
- **Integration Worker**: Handles third-party integrations

## Setup
1. Copy `.env.example` to `.env`
2. Configure worker-specific environment variables
3. Install dependencies:
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production
```bash
npm start
```

## Architecture
- Built with Node.js and TypeScript
- Uses Bull for job queues
- Redis for job storage and messaging
- Modular worker architecture for scalability 