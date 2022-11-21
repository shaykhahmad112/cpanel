from django.db import models

# Create your models here.
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
 
   
    email_plaintext_message  = f'Hey Your Reset Password Link is http://localhost:3000/newpassword/{reset_password_token.key}'
            # email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)
    # email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Password reset token.."),
        # message:
        email_plaintext_message,
        # from:
        "ahmad.hassan@mezino.com",
        # to:
        [reset_password_token.user.email],
         fail_silently=False,
        # [reset_password_token.user.username]
    )