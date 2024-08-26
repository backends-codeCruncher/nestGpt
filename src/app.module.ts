import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GptModule } from './gpt/gpt.module';
import { AnyaAssistantModule } from './anya-assistant/anya-assistant.module';

@Module({
  imports: [ConfigModule.forRoot(), GptModule, AnyaAssistantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
