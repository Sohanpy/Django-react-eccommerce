from rest_framework import serializers

from products.models import Item, Variation, ItemVariation


class ItemListSerilizers(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = [
            'id',
            'name',
            'slug',
            'category',
            'discount_price',
            'actual_price',
            'discription',
            'image',
        ]

    def get_category(self, obj):
        return obj.get_category_display()


class ItemDetailSerilizers(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    variation = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = [
            'id',
            'name',
            'slug',
            'category',
            'discount_price',
            'actual_price',
            'discription',
            'variation',
            'image',
        ]

    def get_category(self, obj):
        return obj.get_category_display()

    def get_variation(self, obj):
        return VariationSerializers(obj.variation_set.all(), many=True).data


class ItemVariationSerializers(serializers.ModelSerializer):
    class Meta:
        model = ItemVariation
        fields = [
            'id',
            'value',
            'attachment'
        ]


class VariationSerializers(serializers.ModelSerializer):
    item_variation = serializers.SerializerMethodField()

    class Meta:
        model = Variation
        fields = [
            'id',
            'name',
            'item_variation'
        ]

    def get_item_variation(self, obj):
        return ItemVariationSerializers(obj.itemvariation_set.all(), many=True).data
