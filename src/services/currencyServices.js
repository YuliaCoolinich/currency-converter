import * as apiServices from './apiServices';

export const getCurrencyExchange = async (currencyList) => {
    const values = await apiServices.getCurrencyExchange();

    return Object.keys(currencyList).reduce((accumulator, currencyCode) => ({
            ...accumulator, 
            [currencyCode]: {
                buy: values.find(value => value.ccy === currencyCode)?.buy ?? 1,
                sale:  values.find(value => value.ccy === currencyCode)?.sale ?? 1
            }
    }), []);
}

export const exchange = async (value, currencyNameFrom, currencyNameTo, currencyList) => {
    const currencies = await getCurrencyExchange(currencyList);
    const currencyFrom = currencies[currencyNameFrom];
    const currencyTo = currencies[currencyNameTo];
    return format(value * currencyFrom?.buy / currencyTo?.sale);
}

function format(value, numbersAfterDot = 2){
    return value.toFixed(numbersAfterDot);
}