import { Module } from '@nestjs/common';
import { AnyaAssistantService } from './anya-assistant.service';
import { AnyaAssistantController } from './anya-assistant.controller';

@Module({
  controllers: [AnyaAssistantController],
  providers: [AnyaAssistantService],
})
export class AnyaAssistantModule {}
