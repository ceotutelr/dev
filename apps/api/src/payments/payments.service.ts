import { Injectable } from '@nestjs/common';
import Razorpay from 'razorpay';
import crypto from 'crypto';

@Injectable()
export class PaymentsService {
  private razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID || '', key_secret: process.env.RAZORPAY_KEY_SECRET || '' });

  async createOrder(amount: number, currency = 'INR') {
    return this.razorpay.orders.create({ amount, currency });
  }

  verifySignature(payload: string, signature: string) {
    const digest = crypto.createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET || '').update(payload).digest('hex');
    return digest === signature;
  }
}
