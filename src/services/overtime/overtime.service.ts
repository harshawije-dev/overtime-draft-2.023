import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OverTime } from '@prisma/client';

@Injectable()
export class OvertimeService {
  // constructor
  constructor(private prisma: PrismaService) {}

  // GET
  // POST
  // LIST
  async getOvertimeListAsync(params: {
    skip?: number | null;
    take?: number | null;
  }): Promise<OverTime[]> {
    const { skip, take } = params;
    return this.prisma.overTime.findMany({
      skip,
      take,
    });
  }
  // UPDATE
  //DELETE
  //
}
