/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { EmployeeService } from 'src/services/employee/employee.service';
import { Employee as EmployeeModel } from '@prisma/client';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get('list')
    async getEmployeeList(@Query('take') take?: string, @Query('skip') skip?: string): Promise<EmployeeModel[] | string> {
        try {
            return this.employeeService.GetEmployeeListAsync({
                skip: Number(skip),
                take: Number(take)
            })
        } catch (error) {
            return error;
        }
    }

    @Get('single/:id')
    async getEmployeeById(@Param('id') id: string): Promise<EmployeeModel | string> {
        try {
            return this.employeeService.GetEmployeeAsyncById({
                empId: Number(id)
            })
        } catch (error) {
            return error;
        }
    }
}
