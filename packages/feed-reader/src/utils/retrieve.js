import axios from 'axios';

const retrieve = async (url, fetchOptions) => {
  const res = await axios.get(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:104.0) Gecko/20100101 Firefox/104.0',
    },
    timeout: 10 * 60 * 1000,
    ...(fetchOptions || {}),
  });

  const status = res.status;
  if (status >= 400) {
    throw new Error(`Request failed with status code ${status}`);
  }
  const contentType = res.headers['content-type'];
  const text = res.data;

  if (/(\+|\/)json/.test(contentType)) {
    if (typeof text === 'string') {
      try {
        const data = JSON.parse(text);
        return { type: 'json', json: data, status, contentType };
      } catch (err) {
        throw new Error('Failed to convert data to JSON object');
      }
    } else {
      return { type: 'json', json: text, status, contentType };
    }
  }

  return { type: 'xml', text: text.trim(), status, contentType };
};

export default retrieve;
