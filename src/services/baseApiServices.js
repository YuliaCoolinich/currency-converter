import * as queryString from 'query-string';

function getUrl(args) {
    return args.apiUrl + args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

export async function callWebApi(args) {
    return await fetch(getUrl(args));
}