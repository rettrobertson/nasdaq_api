from django.http import JsonResponse
from .models import ConversionTable


# Create your views here.


def convert(request):
    conversion_table = ConversionTable.objects.get(Ton=2000)
    conversionTable = {
        "T": conversion_table.Ton,
        "g": conversion_table.Gram,
        "t_oz": conversion_table.Troy_ounce,
        "kg": conversion_table.Kilogram,
        "lb": conversion_table.Pound,
        "oz": conversion_table.Ounce,
    }
    if 'from' in request.GET and 'to' in request.GET and 'value' in request.GET:
        variable = request.GET['from']
        to = request.GET['to']
        value = request.GET['value']
        value2 = value.replace('.', '')
        if variable not in conversionTable or to not in conversionTable or not value2.isnumeric():
            data = {
                "error": "Invalid unit conversion request"
            }
        else:
            value = float(value)

            result = value * conversionTable[variable] / conversionTable[to]
            data = {
                "units": to,
                "value": result,
            }
    else:
        data = {
            "error": "Invalid unit conversion request"
        }
    response = JsonResponse(data)
    response['Access-Control-Allow-Origin'] = '*'
    return response
