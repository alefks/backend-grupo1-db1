import { Test, TestingModule } from '@nestjs/testing';
import { KeyresultsController } from './keyresults.controller';

describe('KeyresultsController', () => {
  let controller: KeyresultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyresultsController],
    }).compile();

    controller = module.get<KeyresultsController>(KeyresultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
