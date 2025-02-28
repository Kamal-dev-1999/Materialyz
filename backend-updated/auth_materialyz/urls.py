from django.urls import path
from auth_materialyz.views import SignupView , LoginView , LogoutView, ProfileView, VerifyOtpView
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path('verify-otp/', VerifyOtpView.as_view(), name='verify-otp'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)