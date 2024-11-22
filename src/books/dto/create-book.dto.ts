import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsNumber()
  chapters: number;

  @IsNumber()
  pages: number;

  @IsArray()
  authors: string[];
}
