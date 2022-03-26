from django.db import migrations


def populate_dp(apps, schema_editor):
    ConversionTable = apps.get_model('unitconv', 'ConversionTable')

    conversionTable = ConversionTable()
    conversionTable.Ton = 2000
    conversionTable.Gram = 0.00220462
    conversionTable.Troy_ounce = 0.0685714
    conversionTable.Kilogram = 2.20462
    conversionTable.Pound = 1
    conversionTable.Ounce = 0.0625
    conversionTable.save()


class Migration(migrations.Migration):

    dependencies = [
        ('unitconv', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(populate_dp)
    ]
