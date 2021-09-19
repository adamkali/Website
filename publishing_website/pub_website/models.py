from django.db import models
from datetime import date

# Create the publication model

class Publication(models.Model):
    pub_id = models.IntegerField(max_length=4, unique=True, primary_key=True)
    pub_date = models.DateField()
    title = models.CharField(max_length=120)
    description = models.TextField()
    link = models.URLField()

    def __str__(self) -> str:
        return self.title

    def get_date(self) -> date:
        return date(self.pub_date)
