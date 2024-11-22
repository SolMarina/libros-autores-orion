import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book, BookSchema } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]), // Vincula el esquema Book con Mongoose
  ],
  controllers: [BooksController], // Controlador para manejar solicitudes HTTP
  providers: [BooksService], // Servicio para la lógica de negocios
})
export class BooksModule {}
