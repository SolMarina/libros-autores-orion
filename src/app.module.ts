import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/orion-test'),
    BooksModule,
    AuthorsModule,
  ],
})
export class AppModule {}




