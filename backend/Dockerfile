
FROM python:3.7-slim as base

# ---- compile image -----------------------------------------------
FROM base AS compile-image
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  build-essential \
  gcc

RUN python -m venv /app/env
RUN /bin/bash -c "source app/env/bin/activate"
# ENV PATH="/app/env/bin:$PATH"
COPY ./backend/requirements.txt /app/requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install -r /app/requirements.txt

# ---- build image -----------------------------------------------
FROM base AS build-image
COPY --from=compile-image /app/env /app/env

# Make sure we use the virtualenv:
# ENV PATH="/app/env/bin:$PATH"
COPY /backend /app
WORKDIR /app

COPY ./backend/flask-entrypoint.sh /flask-entrypoint.sh 

ENV FLASK_APP=app
ENV FLASK_ENV=production
