# WorkHub PH / P-Work PH

A professional, full-stack international job marketplace foundation built with Next.js, Prisma, and PostgreSQL.

## What is included

- Responsive homepage and design system in a white + navy palette
- Authentication architecture with NextAuth credentials support
- Prisma relational schema for users, companies, jobs, applications, resumes, profiles, services, projects, messages, notifications, verification, reports, and audit logs
- Role model with protected dashboard and admin access patterns
- Registration endpoint that blocks public Super Admin creation
- Core authorization helpers and automated auth tests
- Setup instructions and environment examples for local development and deployment

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- NextAuth
- Vitest

## Local setup

1. Clone the repository.
2. Install dependencies:

   npm install

3. Create a PostgreSQL database and copy environment values:

   cp .env.example .env.local

4. Update `.env.local` with your preferred database URL and auth secret.
5. Generate Prisma client:

   npx prisma generate

6. Apply database migrations:

   npx prisma migrate dev --name init

7. Seed the super admin account:

   npm run seed

8. Start the app:

   npm run dev

The app runs at `http://localhost:3000`.

## Authentication and roles

Public registration is limited to:

- JOB_SEEKER
- EMPLOYER
- FREELANCER
- CLIENT
- RECRUITMENT_AGENCY

Super Admin creation is intentionally not exposed publicly. Use the Prisma seed script or a managed database migration to create the protected admin account.

## Protecting routes

- `/dashboard` requires any logged-in user.
- `/admin` requires a `SUPER_ADMIN` account.

The route protection is enforced both through middleware and server-side checks.

## Testing

Run:

npm test

The current tests cover registration-role validation, admin access denial, and permission checks.

## Database design summary

The Prisma schema includes core persistent entities for:

- Users and profiles
- Companies and employer verification
- Job postings and applications
- Resumes and freelancer profiles
- Portfolios and service listings
- Client projects and project applications
- Messaging and notifications
- Reports and audit logs

## Required external services

These must be configured before production deployment:

- PostgreSQL database
- Auth secret for NextAuth (`NEXTAUTH_SECRET`)
- Optional email provider for password reset or verification (e.g., Resend, SendGrid, Postmark)
- Optional file storage service for resumes and attachments (e.g., AWS S3, Cloudinary, Supabase Storage)
- Optional analytics provider (e.g., PostHog, Plausible)

## Deployment guidance

### Vercel + Postgres

1. Import the repository into Vercel.
2. Add the required environment variables from `.env.example`.
3. Provision a PostgreSQL database (Vercel Postgres or a managed service such as Supabase / Neon).
4. Run Prisma migrations in the deployment environment.
5. Seed the initial admin account.
6. Deploy and configure custom domain / HTTPS.

### Other hosting

- Use a Node.js-compatible hosting provider.
- Keep the environment secrets out of client code.
- Run build and migrate commands in the deployment pipeline.

## Notes

This repository intentionally provides the production-ready foundation and core architecture for the first milestone. The homepage is live and the application skeleton is functional, but specific marketplace features like full job search, employer management, messaging, and advanced dashboards will be built in subsequent milestones as production features rather than mock-only screens.
