import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

$(document).ready(function() {
  $('#exchange').submit(function() {
    let currencyUSD = $('#currencyUSD').val();
    let currencyExchange = $('#currencyExchange').val();
    let promise = CurrencyExchange.getCurrencyExchange(currencyExchange);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let newAmount = (`${body.conversionrate}`) * currencyUSD;
      console.log(newAmount);
      $('#showCurrencyExchange').text(` ${currencyUSD} USD converted to ${currencyExchange} is ${newAmount}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});