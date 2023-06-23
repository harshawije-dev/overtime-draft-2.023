import { Module } from '@nestjs/common';
import { DivisionController } from 'src/controllers/division/division.controller';
import { DivisionService } from 'src/services/division/division.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [DivisionController],
  providers: [DivisionService, PrismaService],
})
export class DivisionModule {}
