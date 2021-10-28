import { Test, TestingModule } from '@nestjs/testing';
import { PerspectivesService } from './perspectives.service';

describe('PerspectivesService', () => {
  let service: PerspectivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerspectivesService],
    }).compile();

    service = module.get<PerspectivesService>(PerspectivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
