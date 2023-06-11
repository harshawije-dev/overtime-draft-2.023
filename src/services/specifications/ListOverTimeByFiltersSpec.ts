/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Employee, OverTime } from '@prisma/client';

@Injectable()
export class OvertimeFilterSpec {
    constructor(private prisma: PrismaService) { }

    //   By employee name
    async FilterEmployeeByName(name: string): Promise<OverTime[] | Employee[]> {
        const overtimeList = this.prisma.employee.findMany({
            where: {
                name: name
            },
            include: {
                overTime: {
                    select: {
                        employee: {
                            select: {
                                empId: true,
                                name: true,
                            }
                        },
                        job: true,
                        fieldName: true,
                        hoursInMins: true,
                        rate: true,
                        total: true
                    }
                }
            }
        });

        return overtimeList;
    }
    //   By employee Id
    async FilterEmployeeById(id: number): Promise<OverTime[] | Employee[]> {
        const overtimeList = this.prisma.employee.findMany({
            where: {
                empId: id
            },
            include: {
                overTime: {
                    select: {
                        employee: {
                            select: {
                                empId: true,
                                name: true,
                            }
                        },
                        job: true,
                        fieldName: true,
                        hoursInMins: true,
                        rate: true,
                        total: true
                    }
                }
            }
        });

        return overtimeList;
    }
    //   By date
    // By category
    // By work type

}
