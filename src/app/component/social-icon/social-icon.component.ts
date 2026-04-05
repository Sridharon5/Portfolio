import { Component, input } from '@angular/core';
import type { SocialIconId } from '../../data/social-links';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  templateUrl: './social-icon.component.html',
})
export class SocialIconComponent {
  readonly kind = input.required<SocialIconId>();
  /** Size and color (e.g. `text-current` in navbar for inherited link color). */
  readonly className = input<string>('text-[1.1rem] text-aurora-cyan');
}
