import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';

export const textToAudioUseCase = async (openai: OpenAI, options: Options) => {
  const { prompt, voice } = options;

  const voices = {
    nova: 'nova',
    alloy: 'alloy',
  };

  const selectedVoice = voices[voice] ?? 'nova';

  return {
    prompt,
    selectedVoice,
  };
};
