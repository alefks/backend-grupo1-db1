import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyResultsDto } from './create-keyresults.dto';

export class UpdateKeyResultsDto extends PartialType(CreateKeyResultsDto) {}
