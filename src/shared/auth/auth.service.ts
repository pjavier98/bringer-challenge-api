import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

type User = {
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // This user should be searched from the Database
    const existUser = { email, password };

    const isValidEmail = existUser.email === email;
    const isValidPassword = existUser.password === password;

    if (isValidEmail && isValidPassword) {
      return { email };
    }

    return null;
  }

  async generateJWT({ email, password }: User) {
    const uuid = crypto.randomUUID();

    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const payload = { email: user.email, sub: uuid };

    return {
      jwt: this.jwtService.sign(payload),
    };
  }
}
