import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Navigate to the selected route
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Check if the current route is active
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
