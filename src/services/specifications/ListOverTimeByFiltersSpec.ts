/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OvertimeFilterSpec {
    constructor(private prisma: PrismaService) { }

    //   By employe ename
    //   By employee Id
    //   By date
    // By category
    // By work type
    
}
