/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CROPID = 'b86b89e2-cb36-411a-af02-c578a1c16457';
const CROPIDTWO = 'aa132508-2b9e-4657-8921-3ca6df097551';
const WORKTYPEID = '0624d161-681b-4fbf-8ab4-212485709510';
const WORKTYPEIDSECOND = 'f4482274-0831-4602-afa1-a149b0a34800';
const CATEGORY = 'fe2c60cd-c308-4ce1-9cd9-4817f7c9da88';
const CATEGORYTWO = '38b7495b-25b0-4c5a-9c2a-85489b64a8d0';
const dateOfWork = new Date();

async function main() {
    // Employee
    const employee_one = await prisma.employee.upsert({
        where: {
            empId: 1113,
        },
        create: {
            empId: 1113,
            name: 'A. Ramachandran',
            email: 'ramachandran.hayleas@gmail.com',
        },
        update: {},
    });

    const employee_two = await prisma.employee.upsert({
        where: {
            empId: 1115,
        },
        create: {
            empId: 1115,
            name: 'R. BalaChandram',
            email: 'balachandran.hayleas@gmail.com',
        },
        update: {},
    });

    console.log({ employee_one, employee_two });

    // Division

    const division_one = await prisma.division.upsert({
        where: {
            code: 'BF',
        },
        create: {
            code: 'BF',
            name: 'BEACONS',
            season: '2023',
            field: {
                create: {
                    code: '03C',
                    season: 2023,
                },
            },
        },
        update: {},
    });

    console.log({ division_one });

    // Crop Type
    const croptypeOne = await prisma.cropType.upsert({
        where: {
            id: '85966eb0-6629-460a-8e21-a7121f43a171',
        },
        create: {
            cropType: 'Tea',
            id: '85966eb0-6629-460a-8e21-a7121f43a171',
        },
        update: {},
    });

    const croptypeTwo = await prisma.cropType.upsert({
        where: {
            id: CROPID,
        },
        create: {
            id: CROPID,
            cropType: 'Rubber',
        },
        update: {},
    });

    const croptypeThree = await prisma.cropType.upsert({
        where: {
            id: CROPIDTWO,
        },
        create: {
            id: CROPIDTWO,
            cropType: 'Oil-palm',
        },
        update: {},
    });

    console.log({ croptypeOne, croptypeTwo, croptypeThree });

    // Field
    const fieldOne = await prisma.field.upsert({
        where: {
            divisionCode: 'BF',
        },
        create: {
            code: '4NC',
            divisionCode: 'BF',
            season: 2023,
        },
        update: {},
    });

    const fieldTwo = await prisma.field.upsert({
        where: {
            divisionCode: 'BF',
        },
        create: {
            code: '1A',
            divisionCode: 'BF',
            season: 2023,
        },
        update: {},
    });

    console.log({ fieldOne, fieldTwo });

    // Worktype

    const worktypeOne = await prisma.workType.upsert({
        where: {
            id: WORKTYPEID,
        },
        create: {
            id: WORKTYPEID,
            workType: 'General',
        },
        update: {},
    });

    const worktypeTwo = await prisma.workType.upsert({
        where: {
            id: WORKTYPEIDSECOND,
        },
        create: {
            id: WORKTYPEIDSECOND,
            workType: 'Lent Labor',
        },
        update: {},
    });

    console.log({ worktypeOne, worktypeTwo });

    // Category
    const category = await prisma.category.upsert({
        where: {
            id: CATEGORY,
        },
        create: {
            id: CATEGORY,
            category: 'Permanent',
        },
        update: {},
    });

    const categoryTwo = await prisma.category.upsert({
        where: {
            id: CATEGORYTWO,
        },
        create: {
            id: CATEGORYTWO,
            category: 'Casual',
        },
        update: {},
    });

    console.log({ category, categoryTwo });

    // Over-time

    const overtime = await prisma.overTime.upsert({
        where: {
            employeeId: 'f1beae63-108d-49b0-88e5-ce469b49f92b',
        },
        create: {
            job: 'RL Rolling',
            workedDate: dateOfWork.toISOString(),
            divisionName: 'BF',
            fieldName: '4NC',
            total: 185.79,
            hoursInMins: 120,
            rate: 1.25,
            categoryName: 'Permanent',
            worktypeName: 'General',
            employeeId: 'f1beae63-108d-49b0-88e5-ce469b49f92b',
            history: {
                create: {
                    employeeId: 'f1beae63-108d-49b0-88e5-ce469b49f92b',
                },
            },
        },
        update: {},
    });

    console.log({ overtime });
}


main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})