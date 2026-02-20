import { Body, Controller, Post } from '@nestjs/common';

@Controller('ai')
export class AiController {
  @Post('match/jobs') matchJobs(@Body() body: { candidateSkills: string[] }) {
    return { topMatches: [{ jobId: 'j1', score: 0.92 }], basedOn: body.candidateSkills };
  }

  @Post('score/candidate') scoreCandidate(@Body() body: { skills: string[]; certifications: string[]; mockInterviewScore: number }) {
    const score = body.skills.length * 8 + body.certifications.length * 6 + body.mockInterviewScore * 0.5;
    return { score };
  }

  @Post('score/interview-feedback') scoreInterviewFeedback(@Body() body: { transcript: string }) {
    const sentiment = body.transcript.includes('confident') ? 'positive' : 'neutral';
    return { nlpScore: sentiment === 'positive' ? 88 : 70, sentiment };
  }
}
