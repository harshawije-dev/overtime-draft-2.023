import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { EmployeeModule } from './entities/employee.module';
import { OvertimeModule } from './entities/overtime.module';
import { DivisionModule } from './entities/division.module';

@Module({
  imports: [EmployeeModule, OvertimeModule, DivisionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
