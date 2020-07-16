# activate env
source env/bin/activate

# run Flask app
export FLASK_APP=app
export FLASK_ENV=development
flask run
