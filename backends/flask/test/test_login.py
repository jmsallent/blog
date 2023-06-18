import unittest
from flask import Flask
from main_routes import main_routes_blueprint

class LoginTests(unittest.TestCase):
    def setUp(self):
        self.app = Flask(__name__)
        self.app.register_blueprint(main_routes_blueprint)
        self.app.testing = True
        self.client = self.app.test_client()

    def test_login(self):
        # Enviar una solicitud POST con datos de prueba
        response = self.client.post('/login', data={'username': 'testuser', 'password': 'testpassword'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b'Login successful. Username: testuser, Password: testpassword')

if __name__ == '__main__':
    unittest.main()
