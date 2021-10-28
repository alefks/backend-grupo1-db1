import { Test, TestingModule } from '@nestjs/testing';
import { CheckingService } from './checking.service';

describe('CheckingService', () => {
  let service: CheckingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckingService],
    }).compile();

    service = module.get<CheckingService>(CheckingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
