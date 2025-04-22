# Trigger.dev Webapp Service

This is the main web application service for Trigger.dev. It handles the API and web interface.

## Configuration

- Port: 3000 (exposed as 3040)
- Environment variables required:
  - LOGIN_ORIGIN
  - APP_ORIGIN
  - DEV_OTEL_EXPORTER_OTLP_ENDPOINT
  - ELECTRIC_ORIGIN
  - Database and Redis connection details
  - Email configuration
  - Secrets

## Dependencies

- PostgreSQL
- Redis
- Electric 