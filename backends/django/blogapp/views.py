from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # Lógica para mostrar la página principal del blog
    return render(request, 'home.html')

def post_detail(request, id):
    # Lógica para mostrar los detalles del post con el ID proporcionado
    posts = [...]  # Obtén los posts de tu base de datos o de alguna otra fuente de datos
    return render(request, 'post.html', {'posts': posts})
    # return HttpResponse(f"Detalles del post con ID: {id}")

def login(request):
    # Lógica para mostrar la página principal del blog
    return render(request, 'login.html')