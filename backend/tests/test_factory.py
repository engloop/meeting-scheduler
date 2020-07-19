from app import create_app


def test_config():
    assert not create_app().testing
    assert create_app({'TESTING': True}).testing


def test_working(client):
    response = client.get('/test')
    assert response.data == b'Hello there! Your app is working.'
