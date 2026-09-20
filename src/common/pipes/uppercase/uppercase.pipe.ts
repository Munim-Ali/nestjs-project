import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata) {
    if (value && typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  }
}
