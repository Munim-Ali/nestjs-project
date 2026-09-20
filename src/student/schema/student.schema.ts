import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop()
  name: string;

  @Prop({ type: Address })
  address: Address;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
