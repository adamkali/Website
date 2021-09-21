from rest_framework import serializers
from .models import Publication

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['pub_id', 'pub_date', 'title', 'description', 'link']

    