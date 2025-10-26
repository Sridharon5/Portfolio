import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, CommonModule],
  standalone: true,
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  navItems = [
    { label: 'Home', link: '/home' },
    { label: 'Tech Stacks', link: '/tech-stack' },
    { label: 'Projects', link: '/projects' },
    { label: 'Resume', link: '/resume' },
  ];
  activeIndex = 0;
  setActive(index: number) {
    this.activeIndex = index;
  }
  setGetActive(index:any){
    this.activeIndex=4;
  }
}
