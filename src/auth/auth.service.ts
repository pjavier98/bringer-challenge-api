import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    return email;
  }

  async generateJWT(user: any) {
    const uuid = '123x';

    const payload = { email: user.email, sub: uuid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
