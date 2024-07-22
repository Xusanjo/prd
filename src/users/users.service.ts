import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { SignUpDto } from './dto/signUp.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import { User } from './entities/user.entity'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(signUpDto: SignUpDto) {
    const createdUser = await this.userRepository.save(signUpDto);
    return createdUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
