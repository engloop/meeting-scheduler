# contains application factory and tells Python that the app directory should be treated as a package

import os
from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    # get Flask env variables
    ENV = os.environ.get("ENV")

    # Initialize an instance of Cloud Firestore
    cred = None
    if ENV == "production":
        cred = credentials.Certificate("serviceAccountKey.json")
    else:
        cred = credentials.Certificate("instance/serviceAccountKey.json")
    firebase_admin.initialize_app(cred)

    app.config.from_mapping(
        SECRET_KEY='dev'    # TODO: change this in production
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import create
    app.register_blueprint(create.bp)

    from . import meeting
    app.register_blueprint(meeting.bp)    

    # a simple page that says hello
    @app.route('/test')
    def test():
        return 'Hello there! Your app is working.'

    return app
