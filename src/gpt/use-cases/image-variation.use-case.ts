import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';

export const imageVariationUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { baseImage } = options;
};
