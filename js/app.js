const apiKey = '1d9883052071a8ca45329fea';
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById('from-currency-select');
const toDropDown = document.getElementById('to-currency-select');

currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement('option');
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = 'USD';
toDropDown.value = 'UAH';

let convertCurrency = () => {
  const amount = document.querySelector('#amount').value;
  let fromCurrency = fromDropDown.value;
  let toCurrency = toDropDown.value;

  if (amount.length !== 0) {
    console.log('ok');
    // alert('ok');
    fetch(api).then((response) => response.json()).then((data) => {
      // console.log(data.conversion_rates[fromCurrency]);
      let fromExchangeRate = data.conversion_rates[fromCurrency];
      let toExchangeRate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
    });
  } else {
    // alert('Please fill in the amount');
    console.log('Please fill in the amount');
  }
};

document.querySelector('#convert-bnt').addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);