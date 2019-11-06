import Response from '../../utils/response';
import { translateWithYandex } from '../../services/yandex';

const translatorController = async (req, res) => {
  let text = req.query.text;
  const lang = req.query.lang;

  const translatedText = await translateWithYandex(text, lang);
  if (translatedText.error) {
    return Response
      .error(
        res, 
        translatedText.error.statusCode,
        translatedText.error.message
      );
  }
  return Response.success(res, translatedText);
};

export default translatorController;
