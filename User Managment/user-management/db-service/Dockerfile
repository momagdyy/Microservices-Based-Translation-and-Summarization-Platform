FROM postgres:14

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=secret
ENV POSTGRES_DB=user_management

COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
