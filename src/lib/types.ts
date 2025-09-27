import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type PopularCategory = {
    name: string;
    count: string;
    imageId: string;
    icon: LucideIcon;
}
