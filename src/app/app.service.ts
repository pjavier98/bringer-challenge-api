import { Injectable } from '@nestjs/common';
import {
  GenerateJWTRequest,
  GenerateJWTResponse,
} from './dtos/generateJWT.dto';

@Injectable()
export class AppService {
  generateJWT({ email, password }: GenerateJWTRequest): GenerateJWTResponse {
    return { jwt: `jwt.${email}.${password}` };
  }
}
