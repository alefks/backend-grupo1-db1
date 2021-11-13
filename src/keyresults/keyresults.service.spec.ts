import { Test, TestingModule } from '@nestjs/testing';
import { KeyresultsService } from './keyresults.service';

describe('KeyresultsService', () => {
  let service: KeyresultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyresultsService],
    }).compile();

    service = module.get<KeyresultsService>(KeyresultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
