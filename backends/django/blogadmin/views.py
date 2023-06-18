from django.shortcuts import render
from django.http import HttpResponse

def dashboard(request):
    # Lógica para mostrar el panel de administración
    return render(request, 'dashboard.html')

def create_post(request):
    if request.method == 'GET':
        # Lógica para crear un nuevo post
        return render(request, 'create.html')
    if request.method == 'POST':
        # Lógica para crear un nuevo post
        return HttpResponse("Crear nuevo post")
    else:
        # Manejar el caso en que se acceda a la ruta sin un método POST
        return HttpResponse("Método no permitido")

def update_post(request, id):
    if request.method == 'GET':
        # Lógica para crear un nuevo post
        return render(request, 'update.html')
    if request.method == 'PUT':
        # Lógica para actualizar el post con el ID proporcionado
        return HttpResponse(f"Actualizar post con ID: {id}")
    else:
        # Manejar el caso en que se acceda a la ruta sin un método PUT
        return HttpResponse("Método no permitido")

def delete_post(request, id):
    if request.method == 'DELETE':
        # Lógica para eliminar el post con el ID proporcionado
        return HttpResponse(f"Eliminar post con ID: {id}")
    else:
        # Manejar el caso en que se acceda a la ruta sin un método DELETE
        return HttpResponse("Método no permitido")