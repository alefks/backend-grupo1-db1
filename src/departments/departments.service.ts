import { department, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async getAllDepartments(): Promise<department[]> {
    return this.prisma.department.findMany();
  }

  async getOneDepartment(departmentId: number): Promise<department> {
    return this.prisma.department.findUnique({
      where: {
        id: departmentId,
      },
    });
  }

  async createDepartment(
    data: Prisma.departmentCreateInput,
  ): Promise<department> {
    return this.prisma.department.create({ data });
  }

  async deleteOneDepartment(
    where: Prisma.departmentWhereUniqueInput,
  ): Promise<department> {
    return this.prisma.department.delete({ where });
  }

  async deleteAllDepartments() {
    return this.prisma.department.deleteMany();
  }

  async updateOneDepartment(
    departmentId: number,
    data: Prisma.departmentCreateInput,
  ): Promise<department> {
    return this.prisma.department.update({
      data,
      where: {
        id: departmentId,
      },
    });
  }
}
