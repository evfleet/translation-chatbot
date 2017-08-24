import fetch from 'node-fetch';
import constants from '../../config/constants';

export default async (event, context, callback) => {
  let response;

  try {
    const { languages, apiKey } = constants;
    const { language, phrase } = event.result.parameters;
    const formattedLanguage = normalizeText(language);

    if (Object.keys(languages).includes(formattedLanguage)) {
      const { data: { translations } } = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
          q: phrase,
          target: languages[formattedLanguage]
        }),
      }).then((r) => r.json());

      response = translations[0].translatedText; 
    } else {
      response = 'The service does not support this language.';
    }
  } catch (error) {
    response = 'Unexpected server error';
  }

  callback(null, {
    speech: response,
    displayText: response
  });
}

function normalizeText(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
