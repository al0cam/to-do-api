import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TaskService {

  async create(createTaskDto: CreateTaskDto) {
    try {
      return await prisma.task.create({
        data: {
          ...createTaskDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async findAll() {
    try {
      return await prisma.task.findMany();
    }
    catch (error) {
      console.log(error);
      return error
    }
  }

  async findOne(id: number) {
    try {
      return await prisma.task.findUnique({
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      return await prisma.task.update({
        where: {
          id: id
        },
        data: {
          ...updateTaskDto,
          updatedAt: new Date()
        }
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async remove(id: number) {
    try {
      return await prisma.task.delete({
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
