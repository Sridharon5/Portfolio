import { Component } from '@angular/core';

type SkillItem = { icon: string; label: string };

type SkillSection = { title: string; items: SkillItem[] };

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.component.html',
  standalone: true,
})
export class TechStackComponent {
  readonly sections: SkillSection[] = [
    {
      title: 'Backend',
      items: [
        { icon: 'bi bi-filetype-java', label: 'Java' },
        { icon: 'bi bi-box-seam', label: 'Spring Boot' },
        { icon: 'bi bi-cloud-arrow-up', label: 'REST APIs' },
        { icon: 'bi bi-shield-lock', label: 'Spring Security' },
        { icon: 'bi bi-key-fill', label: 'JWT' },
        { icon: 'bi bi-person-badge', label: 'RBAC' },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { icon: 'fab fa-angular', label: 'Angular' },
        { icon: 'bi bi-filetype-tsx', label: 'TypeScript' },
        { icon: 'bi bi-filetype-js', label: 'JavaScript' },
        { icon: 'bi bi-filetype-html', label: 'HTML' },
        { icon: 'bi bi-filetype-css', label: 'CSS' },
        { icon: 'bi bi-layout-text-sidebar-reverse', label: 'PrimeNG' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { icon: 'bi bi-database-fill', label: 'MySQL' },
        { icon: 'bi bi-hdd-stack-fill', label: 'SQL Server' },
      ],
    },
    {
      title: 'Tools & platforms',
      items: [
        { icon: 'fab fa-git-alt', label: 'Git' },
        { icon: 'bi bi-code-square', label: 'VS Code' },
        { icon: 'bi bi-window-stack', label: 'Eclipse' },
        { icon: 'bi bi-send-check-fill', label: 'Postman' },
      ],
    },
    {
      title: 'Computer science fundamentals',
      items: [
        { icon: 'bi bi-diagram-3-fill', label: 'Data Structures & Algorithms' },
        { icon: 'bi bi-boxes', label: 'Object-Oriented Programming (OOP)' },
        { icon: 'bi bi-table', label: 'Database Management Systems (DBMS)' },
        { icon: 'bi bi-cpu-fill', label: 'Operating Systems' },
      ],
    },
  ];

  readonly achievements: SkillItem[] = [
    { icon: 'bi bi-trophy-fill', label: '1500+ DSA problems (LeetCode, GFG, CodeChef, Codeforces)' },
    { icon: 'bi bi-award-fill', label: '4★ on GeeksforGeeks' },
    { icon: 'bi bi-graph-up-arrow', label: '3★ on CodeChef' },
  ];
}
