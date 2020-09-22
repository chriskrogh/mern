import axios from 'axios';
import { METHOD } from '../types/method';

export const makeRequest = async <R, D = Record<string, unknown>>(
  method: METHOD,
  url: string,
  data?: D,
): Promise<R> => {
  let response = { data: {} };

  try {
    switch (method) {
      case METHOD.GET:
        response = await axios.get(url);
        break;
      case METHOD.POST:
        response = await axios.post(url, data);
        break;
      case METHOD.PATCH:
        response = await axios.patch(url, data);
        break;
      case METHOD.DELETE:
        response = await axios.delete(url);
        break;
      default:
        break;
    }
    return response.data as R;
  } catch (error) {
    throw new Error(`Failed to make request to ${url}`);
  }
};
