import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('me') me() { return { id: 'u1', role: 'candidate' }; }
  @Patch('me') update(@Body() body: Record<string, unknown>) { return { updated: true, body }; }
  @Post('resume/upload') uploadResume() { return { s3Url: 'https://s3.amazonaws.com/bucket/resume.pdf' }; }
  @Post('resume/extract-skills') extractSkills() { return { skills: ['SIEM', 'SOC', 'Incident Response'] }; }
}
