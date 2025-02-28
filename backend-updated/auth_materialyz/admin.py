from django.contrib import admin
from .models import CustomUser, BuyerProfile, SellerProfile
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(BuyerProfile)
admin.site.register(SellerProfile)