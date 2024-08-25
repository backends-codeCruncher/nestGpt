import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';

export const imageGenerationUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt, originalImage, maskImage } = options;

  const response = await openai.images.generate({
    prompt,
    model: 'dall-e-3',
    size: '512x512',
    quality: 'standard',
    response_format: 'url'
  });

  console.log(response);

  return {
    url: response.data[0].url,
    localPath: '',
    revised_prompt: response.data[0].revised_prompt
  }
};
