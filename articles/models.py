from django.db import models

'''
EVENT_MODE = (
    ("Online" , "Offline")
)'''

class Article(models.Model):    
    title = models.CharField(max_length=120)
    content = models.TextField()
    datetime = models.DateTimeField( null=True ) 
    acm_fees = models.IntegerField( null=True )
    nonacm_fees = models.IntegerField( null=True )
    #mode = models.CharField( max_length=10, choices = EVENT_MODE, default = "2" )
    reward = models.CharField(max_length=120 , null=True)

    def __str__(self):
        return self.title
    
