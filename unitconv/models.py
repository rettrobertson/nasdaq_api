from django.db import models

# Create your models here.


class ConversionTable(models.Model):
    Ton = models.FloatField()
    Gram = models.FloatField()
    Troy_ounce = models.FloatField()
    Kilogram = models.FloatField()
    Pound = models.FloatField()
    Ounce = models.FloatField()

    def __str__(self):
        return self.Ton
