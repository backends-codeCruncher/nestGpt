import * as fs from 'fs';
import * as path from 'path';
import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';
import { downloadBase64ImageAsPng, downloadImageAsPng } from 'src/helpers';

export const imageGenerationUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt, originalImage, maskImage } = options;
  if (!originalImage || !maskImage) {
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
  }

  const pngImagePath = await downloadImageAsPng(originalImage);
  const maskPath = await downloadBase64ImageAsPng(maskImage);

  const response = await openai.images.edit({
    model: 'dall-e-3',
    prompt: prompt,
    image: fs.createReadStream(pngImagePath),
    mask: fs.createReadStream(maskPath),
    size: '1024x1024',
    response_format: 'url',
  });

  const localImagePath = await downloadImageAsPng(response.data[0].url);
  const fileName = path.basename(localImagePath);

  return {
    url: '',
    openAIUrl: response.data[0].url,
    revised_prompt: response.data[0].revised_prompt,
  };
};
