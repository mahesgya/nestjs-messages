import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({message: 'HARUS BERISI STRING'})
  content: string;
}