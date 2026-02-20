# Tutelr Career Fast Forward

Production-grade multi-tenant SaaS blueprint for cybersecurity career acceleration.

## Stack
- Frontend: Next.js App Router, Tailwind CSS, shadcn/ui-ready component patterns, Framer Motion, Zustand, Recharts.
- Backend: NestJS-style modules, MongoDB/Mongoose model foundation, Redis-ready session strategy, JWT auth.
- Integrations: Razorpay, AWS S3, AI matching/scoring stubs.

## Roles
1. Candidate
2. Recruiter
3. Admin

## Quick Structure
- `apps/web` — conversion landing + all role dashboards and feature pages.
- `apps/api` — REST modules for auth, users, jobs, AI, payments, certificates, admin analytics.
- `docs/ARCHITECTURE.md` — complete folder structure, schema list, API route matrix, scalability plan.
- `docs/DEPLOYMENT.md` — AWS + Vercel deployment guide.

## Notes
This repository is scaffolded for production evolution with RBAC, webhook verification, certificate verification workflow, and AI scoring extension points.
