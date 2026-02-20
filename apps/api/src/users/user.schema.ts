import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, enum: ['candidate', 'recruiter', 'admin'] }) role!: 'candidate' | 'recruiter' | 'admin';
  @Prop({ required: true }) email!: string;
  @Prop() fullName?: string;
  @Prop({ type: [String], default: [] }) skills!: string[];
  @Prop() resumeUrl?: string;
  @Prop({ default: 0 }) visibilityBoost!: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
