from django.urls import include, path
from rest_framework import routers
from .views import PublicationView

router = routers.DefaultRouter()
router.register(r'publications', PublicationView, 'publication' )

urlpatterns = [
    path('api/', include(router.urls)),
]
