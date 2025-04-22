FROM ghcr.io/triggerdotdev/trigger.dev:${TRIGGER_IMAGE_TAG:-v3}

# Set working directory
WORKDIR /app

# Copy necessary files
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 