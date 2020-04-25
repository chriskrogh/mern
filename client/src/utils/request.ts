import axios from 'axios';
import { Method } from "types/network";

const DEV_URL = 'http://localhost:5000';

export const makeRequest = async <T>(
    method: Method,
    urlExt: string,
    errorMessage: string,
    data?: T
): Promise<T> => {

    var response = { data: {} };
    const url = getUrl(urlExt);

    try {
        switch (method) {
            case Method.GET:
                response = await axios.get(url);
                break;
            case Method.POST:
                response = await axios.post(url, data);
                break;
            case Method.PATCH:
                response = await axios.patch(url, data);
                break;
            case Method.DELETE:
                response = await axios.delete(url);
                break;
            default:
                break;
        }
        return response.data as T;
    } catch (error) {
        throw new Error(errorMessage);
    }
}

export const getUrl = (urlExt: string) => {
    const { NODE_ENV, REACT_APP_PROD_URL } = process.env;
    const baseUrl = (NODE_ENV === 'production' && REACT_APP_PROD_URL)
        ? REACT_APP_PROD_URL
        : DEV_URL;
    return baseUrl + urlExt;
}