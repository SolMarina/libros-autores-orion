import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author, AuthorSchema } from './schemas/author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]), // Vincula el esquema Author con Mongoose
  ],
  controllers: [AuthorsController], // Controlador para manejar solicitudes HTTP
  providers: [AuthorsService], // Servicio para la lógica de negocios
})
export class AuthorsModule {}
