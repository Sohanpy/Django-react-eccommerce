import os
import random
from django.db import models
from django.db.models.signals import pre_save
from ecommerce.utils import unique_slug_generator


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_image_path(instance, filename):
    new_filename = random.randint(15, 3546854131684312)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(
        new_filename=new_filename, ext=ext)
    return "products/{new_filename}{final_filename}".format(
        new_filename=new_filename,
        final_filename=final_filename
    )


def upload_attachment_path(instance, filename):
    new_filename = random.randint(15, 3546854131684312)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(
        new_filename=new_filename, ext=ext)
    return "attachment/{new_filename}{final_filename}".format(
        new_filename=new_filename,
        final_filename=final_filename
    )


CATEGORY_CHOICES = (
    ('C', 'Casual'),
    ('F', 'Formal'),
    ('S', 'Sports'),
    ('K', 'Kids')
)

class Item(models.Model):
    name = models.CharField(max_length=70)
    slug = models.SlugField(blank=True, null=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=1)
    discount_price = models.DecimalField(max_digits=5, decimal_places=2)
    actual_price = models.DecimalField(max_digits=5, decimal_places=2)
    discription = models.TextField(max_length=255)
    image = models.ImageField(upload_to=upload_image_path)

    def __str__(self):
        return self.name


class Variation(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    name = models.CharField(max_length=10)

    class Meta:
        unique_together = (
            ('item', 'name')
        )


class ItemVariation(models.Model):
    variation = models.ForeignKey(Variation, on_delete=models.CASCADE)
    value = models.CharField(max_length=5)
    attachment = models.ImageField(
        blank=True, null=True, upload_to=upload_attachment_path)

    class Meta:
        unique_together = (
            ('variation', 'value')
        )


def unique_slug_generator_reciever(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(unique_slug_generator_reciever, sender=Item)
