import { updateCurrencyTable } from "./update-page";
import { getData, currenciesToArray } from "./helpers";

const EXCHANGE_URL = "https://blockchain.info/ticker";

(function () {

  async function updateBitcoinPrices(){
    let currencies = await getData(EXCHANGE_URL);
    let currencyList = currenciesToArray(currencies);

    updateCurrencyTable(currencyList);
  }

  updateBitcoinPrices();
  setInterval(updateBitcoinPrices, 5000);


  let form = document.getElementById('currency-converter');

  form.onsubmit = function (e) {
    console.info('convert currency');
    e.preventDefault();
  }
})();
