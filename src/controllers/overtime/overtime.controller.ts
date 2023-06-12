import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { OvertimeService } from 'src/services/overtime/overtime.service';
import { OverTime as OverTimeModel } from '@prisma/client';
import { OvertimeFilterSpec } from 'src/services/specifications/ListOverTimeByFiltersSpec';

@Controller('overtime')
export class OvertimeController {
  constructor(
    private readonly overtime: OvertimeService,
    private readonly filterBy: OvertimeFilterSpec,
  ) {}

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

  @Get('/list/filterByName')
  async filterOvertimeRecordsName(
    @Query('name') name: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ): Promise<OverTimeModel[] | any> {
    try {
      return this.filterBy.FilterEmployeeByName({
        name: name,
        skip: Number(skip),
        take: Number(take),
      });
    } catch (error) {
      return error;
    }
  }
}
