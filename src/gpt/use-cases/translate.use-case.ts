import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';

export const translateUseCase = async (openai: OpenAI, options: Options) => {
  const { prompt, lang } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Traduce el siguiente texto al idioma ${lang}:${prompt}`,
      },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.2,
  });

  return { message: completion.choices[0].message.content };
};
