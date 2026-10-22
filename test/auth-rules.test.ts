import { describe, expect, it } from 'vitest';
import { canAccessRoute, hasPermission, isAllowedRegistrationRole } from '@/lib/permissions';

describe('authentication and authorization rules', () => {
  it('allows only public registration roles', () => {
    expect(isAllowedRegistrationRole('JOB_SEEKER')).toBe(true);
    expect(isAllowedRegistrationRole('EMPLOYER')).toBe(true);
    expect(isAllowedRegistrationRole('FREELANCER')).toBe(true);
    expect(isAllowedRegistrationRole('CLIENT')).toBe(true);
    expect(isAllowedRegistrationRole('RECRUITMENT_AGENCY')).toBe(true);
    expect(isAllowedRegistrationRole('SUPER_ADMIN')).toBe(false);
    expect(isAllowedRegistrationRole('ADMIN')).toBe(false);
  });

  it('restricts admin routes to super admins only', () => {
    expect(canAccessRoute('SUPER_ADMIN', 'admin')).toBe(true);
    expect(canAccessRoute('JOB_SEEKER', 'admin')).toBe(false);
    expect(canAccessRoute(undefined, 'admin')).toBe(false);
  });

  it('grants permissions based on role', () => {
    expect(hasPermission('JOB_SEEKER', 'apply_jobs')).toBe(true);
    expect(hasPermission('EMPLOYER', 'create_jobs')).toBe(true);
    expect(hasPermission('FREELANCER', 'manage_services')).toBe(true);
    expect(hasPermission('JOB_SEEKER', 'create_jobs')).toBe(false);
    expect(hasPermission('SUPER_ADMIN', 'all')).toBe(true);
  });
});
