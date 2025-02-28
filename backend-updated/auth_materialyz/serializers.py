from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import BuyerProfile, SellerProfile
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

CustomUser = get_user_model()

# class SignupSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, min_length=6)
#     role = serializers.ChoiceField(choices=CustomUser.ROLE_CHOICES)
#     full_name = serializers.CharField(required=False, write_only=True)
#     compnay_name = serializers.CharField(required=False, write_only=True)
#     phone = serializers.CharField(required=True, write_only=True)
#     address = serializers.CharField(required=True, write_only=True)
#     gst_number = serializers.CharField(required=False, allow_blank=True, write_only=True)
#     profile_picture = serializers.ImageField(required=False, allow_null=True, write_only=True)

#     class Meta:
#         model = CustomUser
#         fields = [
#             "id", "username", "email", "password", "role", "full_name", "compnay_name",
#             "phone", "address", "gst_number", "profile_picture"
#         ]

#     def __init__(self, *args, **kwargs):
#         """
#         Dynamically remove fields that are not needed based on the role passed in the data.
#         """
#         super().__init__(*args, **kwargs)
#         data = self.initial_data if hasattr(self, 'initial_data') else None
#         if data:
#             role = data.get('role')
#             if role == 'buyer':
#                 self.fields.pop('compnay_name', None)
#                 self.fields.pop('gst_number', None)

#     def validate(self, data):
#         role = data.get("role")
#         if role == "seller" and not data.get("compnay_name"):
#             raise serializers.ValidationError({"compnay_name": "This field is required for sellers."})
#         return data

#     def create(self, validated_data):
#         role = validated_data.pop("role")
#         full_name = validated_data.pop("full_name", None)
#         compnay_name = validated_data.pop("compnay_name", None)
#         phone = validated_data.pop("phone")
#         address = validated_data.pop("address", "")
#         gst_number = validated_data.pop("gst_number", "")
#         profile_picture = validated_data.pop("profile_picture", None)
#         password = validated_data.pop("password")

#         user = CustomUser.objects.create_user(
#             username=validated_data.get("username"),
#             email=validated_data.get("email"),
#             password=password,
#             role=role
#         )

#         if role == "buyer":
#             BuyerProfile.objects.create(user=user, full_name=full_name, phone=phone, address=address, profile_picture=profile_picture)
#         elif role == "seller":
#             SellerProfile.objects.create(
#                 user=user, 
#                 compnay_name=compnay_name, 
#                 phone=phone, 
#                 address=address, 
#                 gst_number=gst_number, 
#                 profile_picture=profile_picture
#             )
 
#         return user

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    role = serializers.ChoiceField(choices=CustomUser.ROLE_CHOICES)
    full_name = serializers.CharField(required=False, write_only=True)
    compnay_name = serializers.CharField(required=False, write_only=True)
    phone = serializers.CharField(required=True, write_only=True)
    address = serializers.CharField(required=True, write_only=True)
    gst_number = serializers.CharField(required=False, allow_blank=True, write_only=True)
    profile_picture = serializers.ImageField(required=False, allow_null=True, write_only=True)

    class Meta:
        model = CustomUser
        fields = [
            "id", "username", "email", "password", "role", "full_name", "compnay_name",
            "phone", "address", "gst_number", "profile_picture"
        ]

    def __init__(self, *args, **kwargs):
        """
        Dynamically remove fields that are not needed based on the role passed in the data.
        """
        super().__init__(*args, **kwargs)
        data = self.initial_data if hasattr(self, 'initial_data') else None
        if data:
            role = data.get('role')
            if role == 'buyer':
                self.fields.pop('compnay_name', None)
                self.fields.pop('gst_number', None)
                # For buyer, full_name should be required:
                self.fields['full_name'].required = True

    def validate(self, data):
        role = data.get("role")
        if role == "seller" and not data.get("compnay_name"):
            raise serializers.ValidationError({"compnay_name": "This field is required for sellers."})
        return data

    def create(self, validated_data):
        role = validated_data.pop("role")
        full_name = validated_data.pop("full_name", None)
        compnay_name = validated_data.pop("compnay_name", None)
        phone = validated_data.pop("phone")
        address = validated_data.pop("address", "")
        gst_number = validated_data.pop("gst_number", "")
        profile_picture = validated_data.pop("profile_picture", None)
        password = validated_data.pop("password")

        user = CustomUser.objects.create_user(
            username=validated_data.get("username"),
            email=validated_data.get("email"),
            password=password,
            role=role
        )

        if role == "buyer":
            BuyerProfile.objects.create(
                user=user,
                full_name=full_name,
                phone=phone,
                address=address,
                profile_picture=profile_picture
            )
        elif role == "seller":
            SellerProfile.objects.create(
                user=user,
                compnay_name=compnay_name,
                phone=phone,
                address=address,
                gst_number=gst_number,
                profile_picture=profile_picture
            )
 
        return user




class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        # Attempt to find a user with the given email
        try:
            user_obj = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            raise serializers.ValidationError("Invalid username or password.")

        # Now use the user's username to authenticate
        user = authenticate(username=user_obj.username, password=password)
        if not user:
            raise serializers.ValidationError("Invalid username or password.")

        data["user"] = user
        return data

    def create(self, validated_data):
        user = validated_data["user"]
        refresh = RefreshToken.for_user(user)
        return {
            "user_id": user.id,
            "username": user.username,
            "email": user.email,
            "role": user.role,
            "access_token": str(refresh.access_token),
            "refresh_token": str(refresh),
        }
    
class SellerProfileSerializer(serializers.ModelSerializer):
    profile_picture = serializers.SerializerMethodField()

    class Meta:
        model = SellerProfile
        fields = [
            'compnay_name', 'phone', 'address', 
            'gst_number', 'profile_picture',
            'created_at', 'updated_at'
        ]

    def get_profile_picture(self, obj):
        request = self.context.get('request')
        if obj.profile_picture and hasattr(obj.profile_picture, 'url'):
            return request.build_absolute_uri(obj.profile_picture.url)
        return None

class BuyerProfileSerializer(serializers.ModelSerializer):
    profile_picture = serializers.SerializerMethodField()

    class Meta:
        model = BuyerProfile
        fields = [
            'full_name', 'phone', 'address',
            'profile_picture', 'created_at', 'updated_at'
        ]

    def get_profile_picture(self, obj):
        if obj.profile_picture:
            return self.context['request'].build_absolute_uri(obj.profile_picture.url)
        return None

class ProfileSerializer(serializers.Serializer):
    user = serializers.SerializerMethodField()
    profile = serializers.SerializerMethodField()

    def get_user(self, obj):
        return {
            'id': obj['user'].id,
            'username': obj['user'].username,
            'email': obj['user'].email,
            'role': obj['user'].role,
            'is_verified': obj['user'].is_verified
        }

    def get_profile(self, obj):
        profile = obj['profile']
        if isinstance(profile, SellerProfile):
            return SellerProfileSerializer(profile, context=self.context).data
        elif isinstance(profile, BuyerProfile):
            return BuyerProfileSerializer(profile, context=self.context).data
        return None