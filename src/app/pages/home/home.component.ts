import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESUME_DOWNLOAD_URL } from '../../data/resume-download';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TechStackComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent {
  readonly heroImageUrl =
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=88';

  readonly heroTags = [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'REST',
    'MySQL',
    'SQL Server',
    'Git',
  ];

  downloadResume(): void {
    const a = document.createElement('a');
    a.href = RESUME_DOWNLOAD_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
  }
}
