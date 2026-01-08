import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('')
  listMessages(){
    return 'This is the messages route';
  }

  @Post('')
  createMessage(){

  }

  @Get(':id')
  getMessage(){

  }
}
