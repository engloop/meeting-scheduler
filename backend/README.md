# Flask backend
A flask backend application that provides api endpoints for scheduling meetings among a group of participants.

## Steps to install
```bash
# create virtual environment
$ ./create_env.sh

# activate environment
$ source activate env

# install requirements
$ pip install -r requirements.txt
$ pip install -r requirements-dev.txt
```

## Steps to run
```bash
# make sure json for service account is present in the instance folder
# stuff inside the instance folder is never pushed to github

# start the backend server
$ ./run_app.sh
```

## Steps to test
```bash
# run tests
$ pytest

# measure code coverage
$ coverage run -m pytest

# view coverage report
$ coverage report

# generate HTML report  that allows you to see which lines were covered in each file
$ coverage html

# This generates files in the htmlcov directory. 
# Open htmlcov/index.html in your browser to see the report.
```