import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../user/user.schema';

@Schema()
export class Course extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  instructor: User;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
