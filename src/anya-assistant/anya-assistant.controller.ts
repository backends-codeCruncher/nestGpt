import { Body, Controller, Post } from '@nestjs/common';
import { AnyaAssistantService } from './anya-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('anya-assistant')
export class AnyaAssistantController {
  constructor(private readonly anyaAssistantService: AnyaAssistantService) {}

  @Post('create-thread')
  async createThread() {
    return await this.anyaAssistantService.createThread();
  }

  @Post('user-question')
  async userQuestion(@Body() questionDto: QuestionDto) {
    return await this.anyaAssistantService.userQuestion(questionDto);
  }
}
