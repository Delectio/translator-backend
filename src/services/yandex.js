import axios from 'axios';

export const translateWithYandex = async (text, lang) => {
  const apiUrlBase = process.env.TRANSLATION_API_URL;
  const apiKey = process.env.TRANSLATION_API_KEY;
  const yandexTranslatorUrl = `${apiUrlBase}?key=${apiKey}&text=${text}&lang=${lang}-en&format=plain`;

  try {
    const translatedResult = await axios.get(yandexTranslatorUrl);
    const { data: { text: [translatedText] } } = translatedResult;
    return translatedText;
  } catch(err) {
    return {
      error: {
        statusCode: err.response.data.code,
        message: err.response.data.message
      }
    }    
  }
};
