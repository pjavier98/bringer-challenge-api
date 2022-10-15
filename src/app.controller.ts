import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  generateJWT(): string {
    return this.appService.getHello();
  }
}
