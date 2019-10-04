from rest_framework.generics import ListAPIView, RetrieveAPIView

from products.models import Item, Variation, ItemVariation
from .serializers import ItemListSerilizers, ItemDetailSerilizers


class ItemListAPIView(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemListSerilizers


class ItemDetailAPIView(RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemDetailSerilizers
    lookup_field = 'slug'
