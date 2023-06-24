import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Field } from '@prisma/client';

@Injectable()
export class FieldService {
  constructor(private prisma: PrismaService) {}

  //   List by filters

  async GetFieldListByDivisionName(params: {
    code: string;
    take?: number;
    skip?: number;
  }): Promise<Field[]> {
    const { code, take, skip } = params;

    return this.prisma.field.findMany({
      where: {
        divisionCode: code,
      },
      skip: skip | 0,
      take: take | 10,
    });
  }
}
