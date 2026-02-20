import { Controller, Get, Post } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get('analytics') analytics() { return { mrr: 1600000, activeCandidates: 2340, activeRecruiters: 180 }; }
  @Post('mentors/allocate') allocateMentor() { return { allocated: true }; }
  @Get('support/tickets') tickets() { return [{ id: 't1', status: 'open' }]; }
}
