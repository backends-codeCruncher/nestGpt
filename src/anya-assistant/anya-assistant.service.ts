import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import {
  createMessageUseCase,
  createRunUseCase,
  createThreadUseCase,
} from './use-cases';
import { QuestionDto } from './dtos/question.dto';

@Injectable()
export class AnyaAssistantService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async createThread() {
    return await createThreadUseCase(this.openai);
  }

  async userQuestion(questionDto: QuestionDto) {
    const message = await createMessageUseCase(this.openai, { ...questionDto });
    const run = await createRunUseCase(this.openai, {
      threadId: questionDto.threadId,
    });
  }
}
