/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { History } from '@prisma/client';

@Injectable()
export class EmployeeHistorySpec {
    constructor(private prisma: PrismaService) { }

    async GetEmployeeHistoryBYId(empId: string): Promise<History | null> {
        return this.prisma.history.findFirstOrThrow({
            where: {
                employeeId: String(empId)
            },
            include: {
                overTime: {
                    select: {
                        job: true,
                        hoursInMins: true,
                        total: true,
                        workedDate: true
                    }
                }
            }
        });
    }
}
