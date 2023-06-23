import { Controller, Get, Query } from '@nestjs/common';
import { Division as DivisionModel } from '@prisma/client';
import { DivisionService } from 'src/services/division/division.service';

@Controller('division')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Get('/list')
  async getListDivision(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<DivisionModel[] | string> {
    try {
      return this.divisionService.GetDivisionList({
        take: Number(take),
        skip: Number(skip),
      });
    } catch (error) {
      return `Error occurred: ${error}`;
    }
  }
}
