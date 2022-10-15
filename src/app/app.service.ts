import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { GenerateJWTRequest, GenerateJWTResponse } from './generate-jwt.dtos';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}

  async generateJWT({
    email,
    password,
  }: GenerateJWTRequest): Promise<GenerateJWTResponse> {
    const { access_token } = await this.authService.generateJWT({
      email,
      password,
    });

    return { jwt: `jwt.${email}.${password}.${access_token}` };
  }
}
