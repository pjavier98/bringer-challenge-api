import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/shared/auth/auth.service';
import {
  GenerateJWTRequest,
  GenerateJWTResponse,
} from './dtos/generate-jwt.dtos';
import { TrackingEventsRequest } from './dtos/tracking-events.dto';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}

  async generateJWT({
    email,
    password,
  }: GenerateJWTRequest): Promise<GenerateJWTResponse> {
    const { jwt } = await this.authService.generateJWT({
      email,
      password,
    });

    return { jwt };
  }

  async getTrackingEvents({
    trackingNumber,
  }: TrackingEventsRequest): Promise<any> {
    return { events: [trackingNumber] };
  }
}
