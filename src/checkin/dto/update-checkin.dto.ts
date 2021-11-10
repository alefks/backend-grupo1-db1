import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckinDto } from 'src/checkin/dto/create-checkin.dto';

export class UpdateCheckinDto extends PartialType(CreateCheckinDto) {}