import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiService } from 'src/shared/api/api.service';
import { AuthService } from 'src/shared/auth/auth.service';
import {
  GenerateJWTRequest,
  GenerateJWTResponse,
} from './dtos/generate-jwt.dtos';
import {
  TrackingEventsRequest,
  TrackingEventsResponse,
} from './dtos/tracking-events.dto';

@Injectable()
export class AppService {
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
  ) {}

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
  }: TrackingEventsRequest): Promise<Observable<TrackingEventsResponse>> {
    return this.apiService.getTrackingEvents({ trackingNumber });
  }
}
