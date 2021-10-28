import { Test, TestingModule } from '@nestjs/testing';
import { PerspectivesController } from './perspectives.controller';

describe('PerspectivesController', () => {
  let controller: PerspectivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerspectivesController],
    }).compile();

    controller = module.get<PerspectivesController>(PerspectivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
