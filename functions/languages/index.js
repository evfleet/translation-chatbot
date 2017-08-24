import constants from '../../config/constants';

export default async (event, context, callback) => {
  const { languages } = constants;

  callback(null, { languages });
}