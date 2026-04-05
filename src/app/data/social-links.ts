/** Update these URLs to match your public profiles. */
export type SocialIconId = 'linkedin' | 'github' | 'leetcode' | 'codechef';

export interface SocialProfile {
  label: string;
  href: string;
  icon: SocialIconId;
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maloth-sridhar-varma-918919228/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Sridharon5',
    icon: 'github',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/malothsridharvarma/',
    icon: 'leetcode',
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/malothsridharvarma',
    icon: 'codechef',
  },
];

/** Shown on the contact page under email (recruiter-focused). */
export const CONTACT_HIGHLIGHT_SOCIALS: SocialProfile[] = [
  SOCIAL_PROFILES.find((p) => p.icon === 'linkedin')!,
  SOCIAL_PROFILES.find((p) => p.icon === 'github')!,
];
