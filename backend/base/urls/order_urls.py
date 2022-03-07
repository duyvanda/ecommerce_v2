from django.urls import path
from base.views.order_views import addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDelivered

urlpatterns =[
    path('', getOrders, name='orders'),
    path('add/', addOrderItems, name='orders-add'),
    path('myorders/', getMyOrders, name='myorders'),
    path('<str:pk>/', getOrderById, name='user-order'),
    path('<str:pk>/pay/', updateOrderToPaid, name='pay'),
    path('<str:pk>/deliver/', updateOrderToDelivered, name='order-deliver'),
]