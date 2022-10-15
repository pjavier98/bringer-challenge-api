import { IsEmail, IsString } from 'class-validator';

export class GenerateJWTRequest {
  @IsEmail({ message: 'Email should be valid' })
  email: string;

  @IsString({ message: 'Password should be valid' })
  password: string;
}

export class GenerateJWTResponse {
  @IsString()
  jwt: string;
}
