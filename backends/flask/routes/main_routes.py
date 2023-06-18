from flask import Blueprint, render_template
from ..models.post import Post
main_routes_blueprint = Blueprint('main_routes', __name__)

@main_routes_blueprint.route('/')
def index():
    # posts = Post.find()
    return render_template('main_home.html', template='base_main.html')

@main_routes_blueprint.route('/posts')
def get_posts():
    return render_template('main_post.html', template='base_main.html')

@main_routes_blueprint.route('/login', methods=['GET'])
def show_login_form():
    return render_template('main_login.html', template='base_main.html')

@main_routes_blueprint.route('/login', methods=['POST'])
def process_login():
    username = request.form.get('username')
    password = request.form.get('password')
    # Aquí puedes realizar la lógica de autenticación o cualquier otra acción
    return f'Login successful. Username: {username}, Password: {password}'
