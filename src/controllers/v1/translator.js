import axios from 'axios';
import dotenv from 'dotenv';
import Response from '../../utils/response';

dotenv.config();

const translatorController = async (req, res) => {
  let text = req.body.text || '';
  const lang = req.body.lang;

  if (text.length > 280) {
    return Response.inputError(res, 'text should be no more than 280 characters');
  }
  text = encodeURIComponent(text);  

  const apiUrlBase = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  const apiKey = process.env.TRANSLATION_API_KEY;

  const yandexTranslatorUrl = `${apiUrlBase}?key=${apiKey}&text=${text}&lang=${lang}-en&format=plain`;

  try {
    const translateResult = await axios.get(yandexTranslatorUrl);
    const { data: { text: [translatedText] } } = translateResult;
    return Response.success(res, translatedText);
  } catch(err) {
    return Response.error(res,
      err.response.data.code,
      err.response.data.message);
  }
}

export default translatorController;
