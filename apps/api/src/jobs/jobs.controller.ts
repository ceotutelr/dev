import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller()
export class JobsController {
  @Post('jobs') createJob(@Body() body: Record<string, unknown>) { return { created: true, body }; }
  @Get('jobs/search') searchJobs() { return [{ id: 'j1', title: 'SOC Analyst II' }]; }
  @Post('applications/:id/stage') updateStage(@Param('id') id: string, @Body() body: Record<string, unknown>) { return { id, progressed: true, body }; }
  @Post('mock-interviews/book') bookMockInterview() { return { booked: true }; }
  @Post('assessments/:id/submit') submitAssessment(@Param('id') id: string) { return { id, submitted: true }; }
  @Post('mentors/book') bookMentor() { return { booked: true }; }
  @Get('dashboard/roadmap') roadmap() { return { milestones: ['Resume Optimized', 'Mock Interview Complete'] }; }
}
