from flask import Flask
import connection.connection


# from routes import main_routes_blueprint, admin_routes_blueprint
from routes.main_routes import main_routes_blueprint
from routes.admin_routes import admin_routes_blueprint

app = Flask(__name__)


app.static_folder = 'static'  # Ruta de la carpeta de recursos estáticos
app.static_url_path = '/static'  # URL base para los recursos estáticos

# Registrar los blueprints de rutas
app.register_blueprint(main_routes_blueprint)
app.register_blueprint(admin_routes_blueprint, url_prefix='/admin')

if __name__ == '__main__':
    app.run()
