import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Post('create-order')
  async createOrder(@Body() body: { amount: number }) {
    return this.payments.createOrder(body.amount);
  }

  @Post('create-subscription')
  createSubscription() {
    return { subscriptionId: 'sub_123' };
  }

  @Post('webhook')
  webhook(@Req() req: { rawBody: string; headers: Record<string, string> }) {
    const valid = this.payments.verifySignature(req.rawBody, req.headers['x-razorpay-signature']);
    return { valid };
  }

  @Get(':id/invoice')
  invoice(@Param('id') id: string) {
    return { id, invoiceUrl: `https://invoices.tutelr.com/${id}.pdf` };
  }
}
