# Trigger.dev Setup

This directory contains the configuration for running Trigger.dev in a Docker environment.

## Configuration

The setup uses the following services:
- Webapp (Trigger.dev v3)
- PostgreSQL 16
- Redis 7
- Docker Provider
- Coordinator
- Electric SQL

## Environment Variables

The following environment variables need to be set:

### Database Configuration
- `POSTGRES_DB`
- `POSTGRES_PASSWORD`
- `POSTGRES_PORT`
- `POSTGRES_USER`

### Service Secrets
- `SERVICE_BASE64_MAGICLINK`
- `SERVICE_BASE64_SESSION`
- `SERVICE_BASE64_ENCRYPTION`
- `SERVICE_PASSWORD_64_PROVIDER`
- `SERVICE_PASSWORD_64_COORDINATOR`
- `ELECTRIC_SECRET`

### Email Configuration
- `WHITELISTED_EMAILS`
- `ADMIN_EMAILS`
- `FROM_EMAIL`
- `REPLY_TO_EMAIL`
- `EMAIL_TRANSPORT`
- `RESEND_API_KEY`

### Object Store Configuration
- `OBJECT_STORE_BASE_URL`
- `OBJECT_STORE_ACCESS_KEY_ID`
- `OBJECT_STORE_SECRET_ACCESS_KEY`

### Other Configuration
- `DEFAULT_ORG_EXECUTION_CONCURRENCY_LIMIT`
- `DEFAULT_ENV_EXECUTION_CONCURRENCY_LIMIT`
- `DEPLOY_REGISTRY_HOST`
- `DEPLOY_REGISTRY_NAMESPACE`
- `HTTP_SERVER_PORT`
- `COORDINATOR_HOST`
- `FORCE_CHECKPOINT_SIMULATION`
- `TASK_PAYLOAD_OFFLOAD_THRESHOLD`

## Deployment

The services are configured to run in a Docker Compose environment with Traefik for routing. The webapp is accessible at `https://trigger.colliersdealhub.com`.

## Health Checks

Each service has health checks configured to ensure proper operation:
- Webapp: Checks `/healthcheck` endpoint
- PostgreSQL: Uses `pg_isready`
- Redis: Uses `redis-cli ping`
- Docker Provider: Checks `/health` endpoint
- Coordinator: Checks `/health` endpoint
- Electric: Checks `/v1/health` endpoint

## Volumes

The following volumes are used:
- `postgres-data`: For PostgreSQL data persistence
- `redis-data`: For Redis data persistence

## Networks

The services are connected to an external network named `coolify`. 