import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange.js';

$(document).ready(function() {
  $('#exchange').submit(function(event) {
    event.preventDefault();
    let currencyUSD = $('#currencyUSD').val();
    let currencyExchange = $('#currencyExchange').val();
    let promise = CurrencyExchange.getCurrencyExchange(currencyExchange);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let newAmount = ((`${body.conversion_rate}`) * currencyUSD);
      console.log(response);
      console.log(newAmount);
      $('.showCurrencyExchange').text('');
      $('.showCurrencyExchange').append(newAmount);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});