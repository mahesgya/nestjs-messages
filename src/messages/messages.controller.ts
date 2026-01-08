import { CreateMessageDto } from './dtos/create-message.dto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('')
  listMessages(){
    return 'This is the messages route';
  }

  @Post('')
  createMessage(@Body() body: CreateMessageDto){

    return body.content
  }

  @Get(':id')
  getMessage(@Param('id') id: string){
    console.log(id);
  }
}
