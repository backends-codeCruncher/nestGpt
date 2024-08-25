import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';

export const imageGenerationUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt, originalImage, maskImage } = options;

  console.log({ prompt, originalImage, maskImage });
};
