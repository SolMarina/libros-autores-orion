import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from './schemas/author.schema';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = new this.authorModel(createAuthorDto);
    return newAuthor.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().populate('books').exec();
  }
}
