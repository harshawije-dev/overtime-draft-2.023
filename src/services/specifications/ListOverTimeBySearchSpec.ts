/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ListOvertimeBySearch {
    constructor(private prisma: PrismaClient){}
    
}
