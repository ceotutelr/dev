export function scoreCandidateForJob(input: {
  candidateSkills: string[];
  requiredSkills: string[];
  certifications: string[];
  mockInterviewScore: number;
  lastActiveHoursAgo: number;
}) {
  const overlap = input.requiredSkills.filter((s) => input.candidateSkills.includes(s)).length;
  const skillScore = (overlap / Math.max(input.requiredSkills.length, 1)) * 100;
  const certScore = Math.min(input.certifications.length * 12, 100);
  const interviewScore = Math.min(input.mockInterviewScore, 100);
  const recencyBoost = Math.max(0, 100 - input.lastActiveHoursAgo / 3);

  return 0.45 * skillScore + 0.2 * certScore + 0.25 * interviewScore + 0.1 * recencyBoost;
}
