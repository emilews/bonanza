from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


class Post(models.Model):
	GENDER_CHOICES = (
        ('LIC', 'licra'),
        ('CAM', 'camiseta'),
    )
	title = models.CharField(max_length=200)
	text = models.TextField()
	category = models.CharField(max_length=3, choices=GENDER_CHOICES)
	price = models.IntegerField(null=True, blank=False, validators=[MinValueValidator(1),MaxValueValidator(999999)])
	published_date = models.DateTimeField(blank=True, null=True)
	image = models.ImageField(null=True, blank=False)

	def publish(self):
		self.published_date = timezone.now()
		self.save()

	def __str__(self):
		return self.title	