import { Controller, Get } from '@nestjs/common';
import { Public } from '@common/decorators';

@Controller()
export class AppController {
  @Get()
  @Public()
  getInfo() {
    return {
      name: 'Hitechcloud Wiki CRM',
      version: '0.1.0',
      description: 'SaaS AI Knowledge System',
    };
  }
}
