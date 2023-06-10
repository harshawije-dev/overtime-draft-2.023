import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { OvertimeService } from 'src/services/overtime/overtime.service';
import { OverTime as OverTimeModel } from '@prisma/client';

@Controller('overtime')
export class OvertimeController {
  constructor(private readonly overtime: OvertimeService) {}

  @Get('/list')
  async getOvertimeList(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<OverTimeModel[] | string> {
    try {
      return this.overtime.getOvertimeListAsync({
        skip: Number(skip),
        take: Number(take),
      });
    } catch (error) {
      return error;
    }
  }
}
