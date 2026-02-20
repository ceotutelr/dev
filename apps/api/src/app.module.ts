import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { CertificatesModule } from './certificates/certificates.module';
import { PaymentsModule } from './payments/payments.module';
import { AiModule } from './ai/ai.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/tutelr'),
    AuthModule,
    UsersModule,
    JobsModule,
    CertificatesModule,
    PaymentsModule,
    AiModule,
    AdminModule,
  ],
})
export class AppModule {}
