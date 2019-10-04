from django.urls import path

from .views import ItemListAPIView, ItemDetailAPIView

urlpatterns = [
    path('product/list', ItemListAPIView.as_view(), name='products-list'),
    path('product/detail/<slug>',
         ItemDetailAPIView.as_view(), name='products-details')
]
