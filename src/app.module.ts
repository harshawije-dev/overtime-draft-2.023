import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { EmployeeService } from './services/employee/employee.service';
import { EmployeeController } from './controllers/employee/employee.controller';
import { EmployeeHistorySpec } from './services/specifications/GetEmployeeHistoryByNameSpec';

@Module({
  imports: [],
  controllers: [AppController, EmployeeController],
  providers: [AppService, PrismaService, EmployeeService, EmployeeHistorySpec],
})
export class AppModule {}
