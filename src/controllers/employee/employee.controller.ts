import { Controller, Get, Param, Query } from '@nestjs/common';
import { EmployeeService } from 'src/services/employee/employee.service';
import {
  Employee as EmployeeModel,
  History as HistoryModel,
} from '@prisma/client';
import { EmployeeHistorySpec } from 'src/services/specifications/GetEmployeeHistoryByNameSpec';
import { EmployeeSearchByRangeSpec } from 'src/services/specifications/GetEmployeeByName';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly historySpecService: EmployeeHistorySpec,
    private readonly employeeLimitSpecService: EmployeeSearchByRangeSpec,
  ) {}

  @Get('list')
  async getEmployeeList(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<EmployeeModel[] | string> {
    try {
      return this.employeeService.GetEmployeeListAsync({
        skip: Number(skip),
        take: Number(take),
      });
    } catch (error) {
      return error;
    }
  }

  @Get('single/:id')
  async getEmployeeById(
    @Param('id') id: string,
  ): Promise<EmployeeModel | string> {
    try {
      return this.employeeService.GetEmployeeAsyncById({
        id: id,
      });
    } catch (error) {
      return error;
    }
  }

  @Get('history/:id')
  async getEmployeeHistory(
    @Param('id') id: string,
  ): Promise<HistoryModel | string> {
    try {
      return this.historySpecService.GetEmployeeHistoryBYId(id);
    } catch (error) {
      return error;
    }
  }

  @Get('search')
  async getEmployeeFilterList(
    @Query('take') take: string,
    @Query('name') name: string,
  ): Promise<EmployeeModel[] | string> {
    try {
      return this.employeeLimitSpecService.GetEmployeesInRange(name, take);
    } catch (error) {
      return error;
    }
  }
}
