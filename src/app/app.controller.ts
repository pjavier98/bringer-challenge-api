import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators';
import {
  GenerateJWTRequest,
  GenerateJWTResponse,
} from './dtos/generateJWT.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Post()
  generateJWT(
    @Body() generateJWTRequest: GenerateJWTRequest,
  ): GenerateJWTResponse {
    return this.appService.generateJWT(generateJWTRequest);
  }
}
