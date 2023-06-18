from flask import Blueprint, render_template

admin_routes_blueprint = Blueprint('admin_routes', __name__)

@admin_routes_blueprint.route('/')
def admin_dashboard():
    return render_template('admin_home.html', template='base_admin.html')



@admin_routes_blueprint.route('/create')
def create_post():
    return render_template('admin_create.html', template='base_admin.html')

@admin_routes_blueprint.route('/edit')
def edit_post():
    return render_template('admin_edit.html', template='base_admin.html')



# Puedes agregar más rutas de administrador aquí
