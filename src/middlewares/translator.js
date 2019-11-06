import Response from '../utils/response';

export const inputValidator = (req, res, next) => {
  const text = req.query.text;
  const lang = req.query.lang;

  if (!text || text.trim() === '') {
    return Response.inputError(res, 'Text not specified');
  } else if (!lang) {
    return Response.inputError(res, 'Language not specified');
  } else if (text.length > 280) {
    return Response.inputError(res, 'Text should be no more than 280 characters');
  }
  next();
}
