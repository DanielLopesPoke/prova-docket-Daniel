import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'API Marcas funcionando!';
  }

  @Get('health')
  getHealth(): object {
    return { 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      service: 'API Marcas'
    };
  }
}