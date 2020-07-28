import pytest


# @pytest.fixture
# def func_create_app():
#     from app import create_app
#     return create_app

# def test_config(func_create_app):
#     create_app = func_create_app()
    # app = create_app({'TESTING': True})
    # assert not create_app().testing
    # assert create_app({'TESTING': True}).testing


def test_working(client):
    response = client.get('/test')
    assert response.data == b'Hello there! Your app is working.'
