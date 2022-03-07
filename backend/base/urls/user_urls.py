from django.urls import path
from base.views.user_views import MyTokenObtainPairView, getUserProfile, getUsers, registerUser, updateUserProfile, deleteUser, getUserById, updateUser

urlpatterns =[
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', getUserProfile, name="users-profile"),
    path('', getUsers, name="users-profile"),
    path('register/', registerUser, name='register'),
    path('profile/update/', updateUserProfile, name="user-profile-update"),
    path('delete/<str:pk>/', deleteUser, name='user-delete'),
    path('<str:pk>/', getUserById, name='user'),
    path('update/<str:pk>/', updateUser, name='user-update'),
]