/* eslint-disable prettier/prettier */
import { Employee } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeSearchByNameSpec {
    constructor(private prisma: PrismaService) { }

    async GetEmployeeByName(name: string): Promise<Employee[]> {
        return this.prisma.employee.findMany({
            where: {
                name: name,
            },
        });
    }
}

@Injectable()
export class EmployeeSearchByRangeSpec {
    constructor(private prisma: PrismaService) { }

    async GetEmployeesInRange(name: string, take: string): Promise<Employee[]> {
        return this.prisma.employee.findMany({
            take: Number(take),
            where: {
                name: {
                    contains: name,
                },
            },
            orderBy: {
                empId: 'asc',
            },
        });
    }
}
