import { PartialType } from '@nestjs/mapped-types';
import { CreateQuarterDto } from './create-quarter.dto';

export class UpdateQuarterDto extends PartialType(CreateQuarterDto) {}
