/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Employee, Prisma } from '@prisma/client';

@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) { }
    //  Post employee data
    // Get employee data
    async GetEmployeeAsyncById(empId: Prisma.EmployeeWhereUniqueInput): Promise<Employee | null> {
        return this.prisma.employee.findUniqueOrThrow({
            where: empId
        })
    }

    // List of employee data
    async GetEmployeeListAsync(params: {
        skip?: number | null,
        take?: number | null,
        orderBy?: Prisma.EmployeeOrderByWithRelationInput
    }): Promise<Employee[]> {
        const { skip, take, orderBy } = params;
        return this.prisma.employee.findMany({
            skip: skip | 0,
            take: take | 10,
            orderBy: orderBy
        })
    }
    // Update of employee data
    // Delete of employee data

}
