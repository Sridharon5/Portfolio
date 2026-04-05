import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CONTACT_HIGHLIGHT_SOCIALS } from '../../data/social-links';
import { SocialIconComponent } from '../../component/social-icon/social-icon.component';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SocialIconComponent],
  templateUrl: './contact.component.html',
  standalone: true,
})
export class ContactComponent {
  readonly contactSocials = CONTACT_HIGHLIGHT_SOCIALS;

  statusMessage: string = '';
  isSuccessMessage = false;

  get statusAlertClass(): string {
    const base =
      'mt-3 rounded-lg border px-3 py-2.5 text-sm font-medium';
    return this.isSuccessMessage
      ? `${base} border-aurora-cyan/40 bg-aurora-violet/10 text-void-text`
      : `${base} border-red-500/50 bg-red-950/50 text-red-200`;
  }

  sendEmail(form: any) {
    if (!form.valid) {
      this.showMessage('Please enter all the fields', false);
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
      this.showMessage("Message sent successfully. I'll get back to you soon.", true);
      this.sendAutoReply(form.value.name, form.value.email);
      form.resetForm(); 
    })
    .catch((error: any) => {
      this.showMessage('Problem in sending the mail', false);
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

  showMessage(message: string, success: boolean) {
    this.statusMessage = message;
    this.isSuccessMessage = success;
    const ms = success ? 6500 : 5000;
    setTimeout(() => {
      this.statusMessage = '';
    }, ms);
  }
}
