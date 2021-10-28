import { Test, TestingModule } from '@nestjs/testing';
import { CheckingController } from './checking.controller';

describe('CheckingController', () => {
  let controller: CheckingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckingController],
    }).compile();

    controller = module.get<CheckingController>(CheckingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
