export type UserRole = 'candidate' | 'recruiter' | 'admin';

export interface UserEntity {
  id: string;
  tenantId: string;
  role: UserRole;
  email: string;
  fullName: string;
  skills: string[];
  resumeUrl?: string;
}

export interface RecruiterEntity {
  id: string;
  tenantId: string;
  companyName: string;
  onboardingStatus: 'pending' | 'approved';
}

export interface JobEntity {
  id: string;
  tenantId: string;
  recruiterId: string;
  title: string;
  skillsRequired: string[];
}

export interface ApplicationEntity {
  id: string;
  tenantId: string;
  candidateId: string;
  jobId: string;
  stage: string;
  score: number;
}

export interface CertificateEntity {
  id: string;
  tenantId: string;
  candidateId: string;
  uniqueId: string;
  qrUrl: string;
  pdfUrl: string;
}

export interface PaymentEntity {
  id: string;
  tenantId: string;
  userId: string;
  orderId: string;
  paymentId: string;
  signature: string;
}

export interface SubscriptionEntity {
  id: string;
  tenantId: string;
  userId: string;
  plan: 'starter' | 'pro' | 'enterprise';
}

export interface MentorEntity { id: string; tenantId: string; expertise: string[]; }
export interface AssessmentEntity { id: string; tenantId: string; title: string; rubric: string[]; }
export interface MockInterviewEntity { id: string; tenantId: string; candidateId: string; feedbackScore: number; }
