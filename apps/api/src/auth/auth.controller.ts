import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register') register(@Body() body: Record<string, unknown>) { return { message: 'registered', body }; }
  @Post('login') login(@Body() body: Record<string, unknown>) { return { accessToken: 'jwt-token', refreshToken: 'refresh-token', body }; }
  @Post('refresh') refresh() { return { accessToken: 'new-access-token' }; }
  @Post('logout') logout() { return { ok: true }; }
}
