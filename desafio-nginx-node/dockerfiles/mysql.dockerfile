FROM mysql:5.7

COPY mysql/init_db.sql /docker-entrypoint-initdb.d