from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator



# Custom User Model (Handles both Buyers & Sellers)
class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('buyer', 'Buyer'),
        ('seller', 'Seller'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='buyer')
    email = models.EmailField(unique=True)  # Ensure unique email
    is_verified = models.BooleanField(default=False)  # For email verification

    groups = models.ManyToManyField(
        "auth.Group",
        related_name="custom_users",  # Avoids conflict with built-in User model
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="custom_users_permissions",  # Avoids conflict
        blank=True
    )
    otp = models.CharField(max_length=6, blank=True, null=True)
    def __str__(self):
        return f"{self.username} ({self.role})"


# Seller Profile Model
class SellerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="seller_profile")
    compnay_name = models.CharField(max_length=150, unique=True, help_text="The name of the seller's store.")
    phone = models.CharField(
        max_length=15,
        validators=[RegexValidator(r'^\+?\d{10,15}$', message="Enter a valid phone number.")],
        unique=True,
        help_text="Enter a valid phone number with country code."
    )
    address = models.TextField(help_text="Business address of the seller.")
    gst_number = models.CharField(max_length=100, blank=True, null=True, help_text="Optional: Upload a valid business license.")
    profile_picture = models.ImageField(upload_to='seller_profiles/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.compnay_name}"



# Buyer Profile Model
class BuyerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="buyer_profile")
    full_name = models.CharField(max_length=150, help_text="Buyer's full name.")
    phone = models.CharField(
        max_length=15,
        validators=[RegexValidator(r'^\+?\d{10,15}$', message="Enter a valid phone number.")],
        unique=True,
        help_text="Enter a valid phone number with country code."
    )
    address = models.TextField(help_text="Home or delivery address.", blank=False, null=False)
    profile_picture = models.ImageField(upload_to='buyer_profiles/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username