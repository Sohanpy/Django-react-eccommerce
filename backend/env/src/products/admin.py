from django.contrib import admin

from .models import Item, Variation, ItemVariation


class ItemVariationAdmin(admin.ModelAdmin):
    list_display = ['variation', 'value', 'attachment']
    list_filter = ['variation', 'variation__item']
    search_filter = ['value']


class ItemVariationInlineAdmin(admin.TabularInline):
    model = ItemVariation
    extra = 1


class VariationsAdmin(admin.ModelAdmin):
    list_display = [
        'item',
        'name'
    ]
    list_filter = ['item']
    search_filter = ['name']
    inlines = [ItemVariationInlineAdmin]


admin.site.register(Item)
admin.site.register(ItemVariation, ItemVariationAdmin)
admin.site.register(Variation, VariationsAdmin)
