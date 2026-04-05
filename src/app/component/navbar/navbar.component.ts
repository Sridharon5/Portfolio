import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SOCIAL_PROFILES } from '../../data/social-links';
import { SocialIconComponent } from '../social-icon/social-icon.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule, SocialIconComponent],
  standalone: true,
})
export class NavbarComponent {
  menuOpen = false;

  readonly socials = SOCIAL_PROFILES;

  navItems = [
    { label: 'Home', link: '/home' },
    { label: 'Tech Stacks', link: '/tech-stack' },
    { label: 'Projects', link: '/projects' },
    { label: 'Resume', link: '/resume' },
  ];
}
