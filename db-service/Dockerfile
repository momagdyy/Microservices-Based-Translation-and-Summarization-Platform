# Use the official PostgreSQL image
FROM postgres:latest

# Copy the initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
