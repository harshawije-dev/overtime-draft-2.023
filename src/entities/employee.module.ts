import { Module } from '@nestjs/common';
import { EmployeeController } from 'src/controllers/employee/employee.controller';
import { EmployeeService } from 'src/services/employee/employee.service';
import { PrismaService } from 'src/services/prisma.service';
import { EmployeeHistorySpec } from 'src/services/specifications/GetEmployeeHistoryByNameSpec';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeHistorySpec, EmployeeService, PrismaService],
})
export class EmployeeModule {}
