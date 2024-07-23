import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { SignUpDto } from './dto/signUp.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'; 
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private usermodel: Model<User>
  ){}

  async create(signUpDto: SignUpDto): Promise<User> {
    const createdUser = new this.usermodel(signUpDto);
    return createdUser;
  }

  findAll() {
    return this.usermodel.find();
  }

  findOne(id: number) {
    return this.usermodel.findById(id).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usermodel.findByIdAndUpdate(id, updateUserDto, {new: true}).exec();
  }

  remove(id: number) {
    return this.usermodel.findByIdAndDelete(id).exec();
  }
}
