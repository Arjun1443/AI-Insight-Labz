import { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  overview: string;
  duration: string;
  technologies: string[];
}

export interface ProjectCategory {
  category: string;
  titles: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface NavItem {
  label: string;
  path: string;
}