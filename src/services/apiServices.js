import * as baseApiServices from './baseApiServices';
import { API_URL, EXCHANGE_ENDPOINT } from '../data/constants/PrivatBankApi';

export const getCurrencyExchange = async () => {
    const args = {
        apiUrl: API_URL,
        endpoint: EXCHANGE_ENDPOINT,
        type: 'GET'
    };
    const response = await baseApiServices.callWebApi(args);
    return response.json();
}