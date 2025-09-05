from django.urls import path
from Account import views as UserViews


urlpatterns = [
    path ('register/',UserViews.RegisterView.as_view()), 
]
