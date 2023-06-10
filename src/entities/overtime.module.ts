import { Module } from '@nestjs/common';
import { OvertimeController } from '../controllers/overtime/overtime.controller';
import { OvertimeService } from '../services/overtime/overtime.service';

@Module({
  controllers: [OvertimeController],
  providers: [OvertimeService],
})
export class OvertimeModule {}
