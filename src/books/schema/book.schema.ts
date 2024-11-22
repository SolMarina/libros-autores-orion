import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose'; // Importa mongoose

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  chapters: number;

  @Prop({ required: true })
  pages: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }] }) 
  authors: mongoose.Types.ObjectId[];
}

export const BookSchema = SchemaFactory.createForClass(Book);

