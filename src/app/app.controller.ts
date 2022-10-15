import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TrackingEventsRequest } from './dtos/tracking-events.dto';
import {
  GenerateJWTRequest,
  GenerateJWTResponse,
} from './dtos/generate-jwt.dtos';
import { Public } from './decorators/public.decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Post('generate-jwt')
  async generateJWT(
    @Body() generateJWTRequest: GenerateJWTRequest,
  ): Promise<GenerateJWTResponse> {
    return this.appService.generateJWT(generateJWTRequest);
  }

  @Get('tracking-events')
  async getTrackingEvents(
    @Query() trackingEventsRequest: TrackingEventsRequest,
  ) {
    return this.appService.getTrackingEvents(trackingEventsRequest);
  }
}
