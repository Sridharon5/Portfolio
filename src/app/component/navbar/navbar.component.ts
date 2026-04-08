import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export type NavItem = {
  label: string;
  route: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule],
  standalone: true,
})
export class NavbarComponent {
  private readonly router = inject(Router);

  menuOpen = false;


  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Tech Stacks', route: '/tech-stack' },
    { label: 'Projects', route: '/projects' },
    { label: 'Resume', route: '/resume' },
  ];

  private currentPath(): string {
    return this.router.url.split(/#|\?/)[0] || '/';
  }

  isNavItemActive(item: NavItem): boolean {
    const path = this.currentPath();
    const home = path === '/home' || path === '/' || path === '';

    if (item.route === '/home') {
      return home;
    }

    return path === item.route;
  }

  isContactActive(): boolean {
    return this.currentPath() === '/contact';
  }

  navItemLinkClass(item: NavItem): string {
    const base =
      'block rounded-lg px-4 py-2 text-left text-sm transition-colors duration-200 md:inline-block';
    const active =
      'bg-gradient-to-r from-aurora-violet to-aurora-cyan font-semibold text-white shadow-glow';
    const idle = 'font-medium text-void-muted hover:bg-white/5 hover:text-void-text';
    return `${base} ${this.isNavItemActive(item) ? active : idle}`;
  }

  contactDesktopClass(): string {
    const base =
      'hidden shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold shadow-glow transition hover:opacity-95 hover:shadow-glow-cyan md:inline-flex md:items-center';
    const active =
      'bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white ring-2 ring-aurora-cyan/60 ring-offset-2 ring-offset-void-bg';
    const idle = 'bg-gradient-to-r from-aurora-violet/85 to-aurora-cyan/85 text-white';
    return `${base} ${this.isContactActive() ? active : idle}`;
  }

  contactMobileClass(): string {
    const base = 'block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition hover:opacity-95';
    const active =
      'bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white ring-2 ring-inset ring-aurora-cyan/50';
    const idle = 'bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white';
    return `${base} ${this.isContactActive() ? active : idle}`;
  }
}
