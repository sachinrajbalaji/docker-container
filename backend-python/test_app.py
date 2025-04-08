from app import app

def test_hello():
    response = app.test_client().get('/api/hello')
    assert response.status_code == 200
    assert response.data.decode() == 'Hello from Flask!'
