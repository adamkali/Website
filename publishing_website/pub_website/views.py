from django.shortcuts import render
from rest_framework import viewsets
from .models import Publication
from rest_framework.response import Response
from .serializer import PublicationSerializer

# Create your views here.

class PublicationView(viewsets.ModelViewSet):
    serializer_class = PublicationSerializer
    queryset = Publication.objects.all()