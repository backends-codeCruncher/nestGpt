import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const orthographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Te serán proveídos textos en español con posibles errores ortográficos y gramaticales,
        las pablabras usadas deben existir en el diccionario de la Real Academia Española, 
        debes responder en formato JSON,
        tu tarea es corregirlos y retornar información de las solicitudes,
        también debes de dar un porcentaje de acierto por el usuario,
        si no hay errores, debes retornar un mensaje de felicitaciones.
          
        Ejemplo de salida: 
        {
          userScore: number,
          errors: string[], // ['error -> solución']
          message: string, // Usa emojis y texto para felicitar al usuario
        }

        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
    max_tokens: 150,
  });

  return completion.choices[0];
};
