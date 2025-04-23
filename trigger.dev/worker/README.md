# Trigger.dev Worker Service

This is the worker service for Trigger.dev. It handles job execution and task management.

## Configuration

- Ports: 8020 (API) and 9090 (internal)
- Environment variables required:
  - TRIGGER_API_URL
  - OTEL_EXPORTER_OTLP_ENDPOINT
  - PLATFORM_SECRET
  - TRIGGER_WORKER_TOKEN
  - Database and Redis connection details

## Dependencies

- Webapp service
- PostgreSQL
- Redis 