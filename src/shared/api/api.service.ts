import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { map, catchError, Observable } from 'rxjs';
import {
  TrackingEventsRequest,
  TrackingEventsResponse,
} from 'src/app/dtos/tracking-events.dto';

@Injectable()
export class ApiService {
  constructor(private http: HttpService, private config: ConfigService) {}

  async getTrackingEvents({
    trackingNumber,
  }: TrackingEventsRequest): Promise<Observable<TrackingEventsResponse>> {
    const JWT_BRINGER = this.config.get('JWT_BRINGER');

    const config = {
      headers: {
        Authorization: `Bearer ${JWT_BRINGER}`,
      },
    };

    return this.http
      .get(
        `https://bps.bringer.dev/public/api/v2/get/parcel/tracking.json?tracking_number=${trackingNumber}`,
        config,
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError((err) => {
          console.log(err);
          throw new ForbiddenException('Bringer API not available');
        }),
      );
  }
}
