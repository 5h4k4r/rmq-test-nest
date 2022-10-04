import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('greeting-async')
  async getGreetingMessageAysnc(name: string): Promise<string> {
    Logger.log(`Hello ${name} Async`);
    return `Hello ${name} Async`;
  }
}
