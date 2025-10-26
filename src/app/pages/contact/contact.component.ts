import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  statusMessage: string = '';

  sendEmail(form: any) {
    if (!form.valid) {
      this.showMessage('Please enter all the fields');
      return;
    }
    emailjs.send(
      'service_8ino10h', 
      'template_ketpq7a',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      'mIoRfYcjQzw69EPE6' 
    )
    .then((result: EmailJSResponseStatus) => {
      this.showMessage('Message was sent successfully!');
      this.sendAutoReply(form.value.name, form.value.email);
      form.resetForm(); 
    })
    .catch((error: any) => {
      this.showMessage('Problem in sending the mail');
    });
  }

  sendAutoReply(name: string, email: string) {
    emailjs.send(
      'service_8ino10h',
      'template_l0uzisn', 
      {
        from_name: name,
        to_email: email,
      },
      'mIoRfYcjQzw69EPE6' 
    )
    .then(() => {
      console.log('Auto-reply sent successfully.');
    })
    .catch((error) => {
      console.error('Error sending auto-reply:', error);
    });
  }

  showMessage(message: string) {
    this.statusMessage = message;
    setTimeout(() => {
      this.statusMessage = '';
    }, 4000);
  }
}
