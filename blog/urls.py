from django.urls import path, re_path
from . import views
from .views import ListPostView

urlpatterns = [
    path('post/', ListPostView.as_view(), name="post-all"),
]