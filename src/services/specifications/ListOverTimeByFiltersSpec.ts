/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Employee, OverTime } from '@prisma/client';

@Injectable()
export class OvertimeFilterSpec {
    constructor(private prisma: PrismaService) { }

    //   By employee name
    async FilterEmployeeByName(params: {
        name: string,
        take?: number,
        skip?: number
    }): Promise<OverTime[] | Employee[]> {

        const { name, take, skip } = params;

        const overtimeList = this.prisma.employee.findMany({
            where: {
                name: name
            },
            include: {
                overTime: {
                    select: {
                        job: true,
                        fieldName: true,
                        hoursInMins: true,
                        rate: true,
                        total: true
                    }
                }
            },
            skip: skip | 0,
            take: take | 10
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
    // By date
    // By category
    // By work type

}
