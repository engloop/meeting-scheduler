#!/bin/bash

source /app/env/bin/activate

export FLASK_APP=app
export FLASK_ENV=development
python3 -m flask run