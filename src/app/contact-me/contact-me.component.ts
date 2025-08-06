import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  sendEmail(form: any) {
    emailjs.sendForm(
      'service_jvpijos',     // EmailJS service ID
      'template_7o4w5d1',    // EmailJS template ID
      form.target,      // HTML form
      '87E_Fzvzc47ddRc99' // Your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully! Thank you.');
        form.target.reset();
      },
      (error) => {
        alert('Failed to send message.');
        console.log(error);
      }
    );
  }
}
