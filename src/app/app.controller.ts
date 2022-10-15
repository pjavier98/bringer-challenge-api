import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateJWTRequest, GenerateJWTResponse } from './generate-jwt.dtos';
import { Public } from './public.decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Post()
  async generateJWT(
    @Body() generateJWTRequest: GenerateJWTRequest,
  ): Promise<GenerateJWTResponse> {
    return this.appService.generateJWT(generateJWTRequest);
  }
}
