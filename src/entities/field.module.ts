import { Module } from '@nestjs/common';
import { FieldController } from 'src/controllers/field/field.controller';
import { FieldService } from 'src/services/field/field.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [FieldController],
  providers: [FieldService, PrismaService],
})
export class FieldModule {}
