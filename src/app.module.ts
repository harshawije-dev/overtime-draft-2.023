import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { EmployeeModule } from './entities/employee.module';
import { OvertimeModule } from './entities/overtime.module';
import { DivisionModule } from './entities/division.module';
import { FieldService } from './services/field/field.service';
import { FieldController } from './controllers/field/field.controller';
import { FieldModule } from './entities/field.module';

@Module({
  imports: [EmployeeModule, OvertimeModule, DivisionModule, FieldModule],
  controllers: [AppController, FieldController],
  providers: [AppService, PrismaService, FieldService],
})
export class AppModule {}
