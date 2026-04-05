import { Component } from '@angular/core';
import { RESUME_DOWNLOAD_URL } from '../../data/resume-download';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  standalone: true,
})
export class ResumeComponent {
  downloadResume(): void {
    const a = document.createElement('a');
    a.href = RESUME_DOWNLOAD_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  }
}
