import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CertificatesService } from './certificates.service';

@Controller()
export class CertificatesController {
  constructor(private readonly certificates: CertificatesService) {}

  @Post('certificates/generate') generate(@Body() body: { candidateId: string }) {
    return this.certificates.generateCertificate(body.candidateId);
  }

  @Post('certificates/:id/approve') approve(@Param('id') id: string) {
    return { id, approved: true, approvedAt: new Date().toISOString() };
  }

  @Get('verify/:certificateId') verify(@Param('certificateId') certificateId: string) {
    return { certificateId, status: 'verified', candidate: 'Jane Doe', track: 'Career Fast Forward Accelerator' };
  }
}
