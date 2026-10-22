import type { NextAuthOptions } from 'next-auth';

export const availableRoles = ['JOB_SEEKER', 'EMPLOYER', 'FREELANCER', 'CLIENT', 'RECRUITMENT_AGENCY'] as const;
export type RegistrationRole = (typeof availableRoles)[number];

export function isAllowedRegistrationRole(role: string): boolean {
  return availableRoles.includes(role as RegistrationRole);
}

export function canAccessRoute(role: string | undefined, route: 'dashboard' | 'admin'): boolean {
  if (!role) return false;

  if (route === 'admin') {
    return role === 'SUPER_ADMIN';
  }

  return true;
}

export function hasPermission(role: string | undefined, permission: string): boolean {
  const permissionsByRole: Record<string, string[]> = {
    SUPER_ADMIN: ['all'],
    JOB_SEEKER: ['view_jobs', 'apply_jobs', 'save_jobs', 'view_dashboard'],
    EMPLOYER: ['create_jobs', 'manage_company', 'review_applications', 'view_dashboard'],
    FREELANCER: ['view_projects', 'apply_projects', 'manage_services', 'view_dashboard'],
    CLIENT: ['post_projects', 'review_proposals', 'view_dashboard'],
    RECRUITMENT_AGENCY: ['manage_candidates', 'post_jobs', 'view_dashboard'],
  };

  const allowed = permissionsByRole[role ?? ''] ?? [];

  return allowed.includes('all') || allowed.includes(permission);
}

export const authOptions: NextAuthOptions = {};
