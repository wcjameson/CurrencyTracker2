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
      $('.showErrors').text('');
      $('.showCurrencyExchange').text('');
      $('.showCurrencyExchange').append("Thats " + newAmount + " " + currencyExchange + "!");
    }, function(error) {
      $('.showErrors').text('');
      $('.showErrors').text(`There was an error processing that request: ${error}`);
    });
  });

  $('#currencyCodesBtn').click(function() {
    $('.currencyCodes').toggle();
  });
});