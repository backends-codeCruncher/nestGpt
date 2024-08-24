import * as path from 'path';
import * as fs from 'fs';
import OpenAI from 'openai';
import { Options } from '../interfaces/options.interface';

export const textToAudioUseCase = async (openai: OpenAI, options: Options) => {
  const { prompt, voice } = options;

  const voices = {
    alloy: 'alloy',
    echo: 'echo',
    fable: 'fable',
    onyx: 'onyx',
    nova: 'nova',
    shimmer: 'shimmer',
  };

  const selectedVoice = voices[voice] ?? 'nova';

  const folderPath = path.resolve(__dirname, '../../../generated/audios/');
  const speechFile = path.resolve(`${folderPath}/${new Date().getTime()}.mp3`);

  fs.mkdirSync(folderPath, { recursive: true });

  const audio = await openai.audio.speech.create({
    model: 'tts-1',
    voice: selectedVoice,
    input: prompt,
    response_format: 'mp3',
  });

  const buffer = Buffer.from(await audio.arrayBuffer());
  fs.writeFileSync(speechFile, buffer);

  return speechFile;
};
