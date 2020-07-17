"""
https://flask.palletsprojects.com/en/1.1.x/tutorial/tests/
"""

import pytest
from app import create_app


@pytest.fixture
def app():
    app = create_app({
        'TESTING': True,
    })

    yield app


@pytest.fixture
def client(app):
    return app.test_client()


@pytest.fixture
def runner(app):
    return app.test_cli_runner()