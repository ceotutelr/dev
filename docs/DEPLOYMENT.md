# Deployment Guide (AWS + Vercel)

## Frontend (Vercel)
1. Import repo in Vercel.
2. Root directory: `apps/web`.
3. Set env vars: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_RAZORPAY_KEY_ID`.
4. Enable image optimization and edge caching.

## Backend (AWS ECS Fargate)
1. Build NestJS docker image from `apps/api`.
2. Push image to ECR.
3. Deploy ECS service behind ALB.
4. Configure autoscaling on CPU + request count.

## Data & Storage
- MongoDB Atlas with private peering.
- ElastiCache Redis for sessions/cache.
- S3 for resume and certificates.

## Secrets
Use AWS Secrets Manager for:
- JWT secrets
- Razorpay key secret
- Mongo URI
- Redis URI
- S3 credentials

## Observability
- CloudWatch logs + metrics.
- OpenTelemetry traces to X-Ray/datadog.
- Alerts on payment webhook failures and auth anomalies.
