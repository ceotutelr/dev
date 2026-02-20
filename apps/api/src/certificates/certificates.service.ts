import { Injectable } from '@nestjs/common';
import QRCode from 'qrcode';

@Injectable()
export class CertificatesService {
  async generateCertificate(candidateId: string) {
    const uniqueId = `TUT-${Date.now()}`;
    const verifyUrl = `https://tutelr.app/verify/${uniqueId}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    return {
      candidateId,
      uniqueId,
      verifyUrl,
      qrDataUrl,
      pdfUrl: `https://s3.amazonaws.com/tutelr/certificates/${uniqueId}.pdf`,
    };
  }
}
