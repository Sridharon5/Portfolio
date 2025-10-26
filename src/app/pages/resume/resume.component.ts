import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
   downloadResume() {
    const link = document.createElement('a');
    link.href = '/pdfs/sridhar-resume.pdf'; 
    link.download = 'Maloth_Sridhar_Varma_Resume.pdf';
    link.click();
  }
}
