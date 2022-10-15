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
    const { jwt } = await this.authService.generateJWT({
      email,
      password,
    });

    return { jwt };
  }
}
