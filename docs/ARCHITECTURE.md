# Tutelr Career Fast Forward — Production Blueprint

## 1) Folder Structure

```txt
/apps
  /web (Next.js App Router + Tailwind + shadcn/ui + Framer Motion + Zustand + Recharts)
    /app
      /candidate
      /recruiter
      /admin
      /verify/[certificateId]
      /payment/success
      /jobs
      /mentors
      /assessments
      /profile
      /analytics
    /components
    /lib
  /api (NestJS + Mongoose + Redis + JWT + Razorpay)
    /src
      /auth
      /common
      /users
      /recruiters
      /jobs
      /applications
      /certificates
      /payments
      /subscriptions
      /mentors
      /assessments
      /mock-interviews
      /ai
      /audit
      /admin
/docs
  ARCHITECTURE.md
  DEPLOYMENT.md
```

## 2) Database Schema (MongoDB + Mongoose)

- `users`: role (`candidate|recruiter|admin`), profile, skills, resume URL, visibility score, subscription status.
- `recruiters`: company details, billing profile, team members, active jobs.
- `jobs`: recruiterId, role metadata, skillsRequired, salary range, hiring stage config.
- `applications`: candidateId, jobId, stage history, scores, recruiter feedback.
- `certificates`: candidateId, uniqueId, qrUrl, pdfUrl, verification state, issuedBy.
- `payments`: userId, orderId, paymentId, signature, status, amount, invoiceUrl.
- `subscriptions`: plan, renewal date, coupon/referral metadata.
- `mentors`: expertise tags, availability, ratings.
- `assessments`: task templates, rubrics, scorecards.
- `mockInterviews`: interviewer, transcript, NLP feedback summary.

## 3) Backend API Routes

Auth:
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`

Candidates:
- `GET /users/me`
- `PATCH /users/me`
- `POST /users/resume/upload`
- `POST /users/resume/extract-skills`

Recruiters:
- `POST /recruiters/onboard`
- `POST /jobs`
- `GET /jobs/search`
- `POST /applications/:id/stage`

Career Accelerator:
- `POST /mock-interviews/book`
- `POST /assessments/:id/submit`
- `POST /mentors/book`
- `GET /dashboard/roadmap`

AI:
- `POST /ai/match/jobs`
- `POST /ai/score/candidate`
- `POST /ai/score/interview-feedback`

Payments:
- `POST /payments/create-order`
- `POST /payments/create-subscription`
- `POST /payments/webhook`
- `GET /payments/:id/invoice`

Certificates:
- `POST /certificates/generate`
- `POST /certificates/:id/approve`
- `GET /verify/:certificateId`

Admin:
- `GET /admin/analytics`
- `POST /admin/mentors/allocate`
- `GET /admin/support/tickets`

## 4) Frontend Pages

- Landing (`/`) conversion-focused with CTA urgency.
- Candidate Dashboard (`/candidate`) KPI widgets + progress.
- Recruiter Dashboard (`/recruiter`) funnel, talent matching.
- Admin Panel (`/admin`) user + billing + certificate control.
- Certificate Verification (`/verify/[certificateId]`) public trust page.
- Payment Success (`/payment/success`) transaction confirmation.
- Job Board (`/jobs`), Mentor Booking (`/mentors`), Task Assessments (`/assessments`), Profile Builder (`/profile`), Analytics (`/analytics`).

## 5) UI Components

- Cyber theme tokens in Tailwind config (primary, secondary, bg, accent, urgency).
- `DashboardShell`, `SidebarNav`, `KpiCard`, `FunnelChart`, `SkillHeatmapChart`.
- Framer Motion page transitions and CTA hover effects.

## 6) Payment Integration

- Razorpay order/subscription creation from backend.
- Webhook signature verification using shared secret.
- Invoice URL persistence in `payments` collection.
- Frontend success page fetches order details and status.

## 7) Certificate Generator

Flow implemented via `CertificateService`:
1. Validate accelerator completion + admin approval.
2. Generate unique certificate ID.
3. Generate PDF + QR (URL points to `/verify/:certificateId`).
4. Upload PDF to S3.
5. Persist metadata in `certificates`.

## 8) AI Matching Logic (Pseudocode)

```ts
scoreCandidateForJob(candidate, job) {
  skillScore = overlap(candidate.skills, job.skillsRequired)
  certScore = weightCertifications(candidate.certifications)
  interviewScore = normalize(candidate.mockInterviewScore)
  recencyBoost = freshness(candidate.lastActiveAt)
  return 0.45*skillScore + 0.2*certScore + 0.25*interviewScore + 0.1*recencyBoost
}
```

## 9) Deployment Guide

See `docs/DEPLOYMENT.md` for AWS + Vercel setup.

## 10) Scalability Plan

- API horizontal scaling behind ALB.
- MongoDB Atlas sharding by tenant/workspace.
- Redis for session, caching, and queue buffering.
- S3 + CloudFront for resume/certificate assets.
- Async workers for AI scoring, PDF generation, webhook processing.
- Audit logs and observability with OpenTelemetry.
