import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Division } from '@prisma/client';

@Injectable()
export class DivisionService {
  constructor(private prisma: PrismaService) {}

  // List
  async GetDivisionList(params: {
    skip?: number;
    take?: number;
  }): Promise<Division[]> {
    const { take, skip } = params;
    return this.prisma.division.findMany({
      skip: skip | 0,
      take: take | 10,
    });
  }
}
