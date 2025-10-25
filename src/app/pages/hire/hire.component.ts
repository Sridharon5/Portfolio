import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hire',
  imports:[CommonModule],
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent {
  roles = [
    {
      title: 'Software Developer',
      priority: 'High Priority',
      description: 'Expert in designing, developing, and deploying scalable software solutions.',
      resumeLink: '#'
    },
    {
      title: 'Data Scientist',
      priority: '',
      description: 'Proficient in extracting insights from data and building predictive models.',
      resumeLink: '#'
    },
    {
      title: 'Data Analyst',
      priority: '',
      description: 'Skilled in data visualization, reporting, and analyzing business trends.',
      resumeLink: '#'
    }
  ];
}
