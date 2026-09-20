import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop()
  city: string;

  @Prop()
  country: string;
}
