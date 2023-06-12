import { Module } from '@nestjs/common';
import { OvertimeController } from '../controllers/overtime/overtime.controller';
import { OvertimeService } from '../services/overtime/overtime.service';
import { OvertimeFilterSpec } from 'src/services/specifications/ListOverTimeByFiltersSpec';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [OvertimeController],
  providers: [OvertimeService, OvertimeFilterSpec, PrismaService],
})
export class OvertimeModule {}
