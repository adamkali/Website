from django.contrib import admin
from .models import Publication

# Register your models here.

class PublicationAdmin(admin.ModelAdmin):
    list_display = ('pub_id', 'pub_date', 'title', 'description', 'link')

admin.site.register(Publication,PublicationAdmin)