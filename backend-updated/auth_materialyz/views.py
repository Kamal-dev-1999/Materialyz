from rest_framework import generics
from rest_framework.permissions import AllowAny
from auth_materialyz.models import CustomUser
from auth_materialyz.serializers import SignupSerializer , LoginSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import *
import random
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage
User=get_user_model()
# class SignupView(generics.CreateAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = SignupSerializer
#     print(SignupSerializer.data)
#     permission_classes = [AllowAny]  # Allow anyone to register


class SignupView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        # Create the user using the existing serializer logic
        user = serializer.save()
        # Mark user as inactive until OTP verification
        user.is_active = False
        # Generate a random 5-digit OTP
        otp = random.randint(10000, 99999)
        user.otp = str(otp)  # Save as string to avoid type mismatches
        user.save()

        # Send OTP email
        subject = "Your OTP Code for Account Activation"
        message = f"Your OTP for account activation is: {otp}"
        from_email = settings.DEFAULT_FROM_EMAIL  # Set this in your settings.py
        recipient_list = [user.email]
        try:
            send_mail(subject, message, from_email, recipient_list)
        except Exception as e:
            # Handle email sending failure as needed
            print("Error sending email:", e)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]  # Allow anyone to attempt login

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        tokens = serializer.save()  

        return Response({
            "user_id": tokens["user_id"],
            "username": tokens["username"],
            "email": tokens["email"],
            "role": tokens["role"],
            "access_token": tokens["access_token"],
            "refresh_token": tokens["refresh_token"],
        }, status=status.HTTP_200_OK)
    

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh_token")
            if not refresh_token:
                return Response({"error": "Refresh token is required"}, status=status.HTTP_400_BAD_REQUEST)

            token = RefreshToken(refresh_token)
            token.blacklist()  
            return Response({"message": "Successfully logged out"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        try:
            # Get appropriate profile based on user role
            if user.role == 'seller':
                profile = user.seller_profile
            elif user.role == 'buyer':
                profile = user.buyer_profile
            else:
                return Response(
                    {"error": "Invalid user role"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Serialize combined user and profile data
            serializer = ProfileSerializer({
                'user': user,
                'profile': profile
            }, context={'request': request})
            
            return Response(serializer.data)

        except (SellerProfile.DoesNotExist, BuyerProfile.DoesNotExist):
            return Response(
                {"error": "Profile not found for this user"},
                status=status.HTTP_404_NOT_FOUND
            )
            
class VerifyOtpView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        otp_entered = request.data.get('otp')
        
        if not email or not otp_entered:
            return Response({"error": "Both email and OTP are required."},
                            status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({"error": "User with this email does not exist."},
                            status=status.HTTP_404_NOT_FOUND)
        
        # Compare the OTPs (both as strings)
        if str(user.otp) == str(otp_entered):
            user.is_active = True  # Activate the account
            user.is_verified = True  # Mark the email as verified
            user.otp = ""  # Optionally clear the OTP field
            user.save()
            return Response({"message": "OTP verified successfully. Your account is now active."},
                            status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid OTP."},
                            status=status.HTTP_400_BAD_REQUEST)