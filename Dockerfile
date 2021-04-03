FROM httpd:alpine
COPY ./index.html /usr/local/apache2/htdocs/
COPY ./Scripts /usr/local/apache2/htdocs/