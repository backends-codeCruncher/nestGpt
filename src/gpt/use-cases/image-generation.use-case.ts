import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';
import { downloadImageAsPng } from 'src/helpers';

export const imageGenerationUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt, originalImage, maskImage } = options;

  const response = await openai.images.generate({
    prompt,
    model: 'dall-e-3',
    size: '1024x1024',
    quality: 'standard',
    response_format: 'url',
  });

  const url = await downloadImageAsPng(response.data[0].url);

  return {
    url,
    openAIUrl: response.data[0].url,
    revised_prompt: response.data[0].revised_prompt,
  };
};
