import { Controller, Get, Query } from '@nestjs/common';
import { Field as FieldModel } from '@prisma/client';
import { FieldService } from 'src/services/field/field.service';

@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Get('/list')
  async getFieldList(
    @Query('code') code: string,
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<FieldModel[] | string> {
    try {
      return this.fieldService.GetFieldListByDivisionName({
        code: code,
        take: Number(take),
        skip: Number(skip),
      });
    } catch (error) {
      return `Error occurred: ${error}`;
    }
  }
}
