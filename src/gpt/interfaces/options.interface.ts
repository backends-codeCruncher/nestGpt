export interface Options {
  prompt?: string;
  lang?: string;
  voice?: string;
  audioFile?: Express.Multer.File;
  originalImage?: string;
  maskImage?: string;
}
