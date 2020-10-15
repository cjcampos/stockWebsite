/**
 * Returns basic stock information for the selected stock in json format
 * Input: Stock Symbol
 * Return: c (current price), h (high price of the day), l (low price of the day),
 * o (opening price), pc (previous close price), t (timestamp)
 */

function  getBasicStockInfo(symbol) {
    const request = require('request');
    let url = 'https://finnhub.io/api/v1/quote?symbol=' + symbol + '&token=bu3qnmf48v6up0bi2uvg';
    request(url, { json: true }, (err, res, body) => {
        if (err) { return err; }
        return body
    });
}


/**
 * Returns additional information about a stock
 * Input: Stock Symbol
 * Return: country, currency, exchange, ipo, marketCapitalization, name,
 * phone, shareOutstanding, ticker, weburl, logo, finnhubIndustry
 */
function getAdditionalInfo(symbol) {
    const request = require('request');
    let url = 'https://finnhub.io/api/v1/stock/profile2?symbol=' + symbol + '&token=bu3qnmf48v6up0bi2uvg';
    request(url, { json: true }, (err, res, body) => {
        if (err) { return err; }
        return body;
    });
}
