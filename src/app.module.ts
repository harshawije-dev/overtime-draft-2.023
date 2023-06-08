import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { EmployeeService } from './services/employee/employee.service';
import { EmployeeController } from './controllers/employee/employee.controller';

@Module({
  imports: [],
  controllers: [AppController, EmployeeController],
  providers: [AppService, PrismaService, EmployeeService],
})
export class AppModule {}
