function setCurrencyCell(cellElement, currency, value) {
  cellElement.innerHTML = `${currency}${value.toFixed(2)}`;
  cellElement.classList.add('numeric');
}

export function updateCurrencyTable(currencyData) {
  let table = document.querySelector("#bitcoin-prices");

  if (!table) {
    return;
  }

  currencyData.forEach((currency) => {
    let { name, buy, last, sell, symbol, '15m': last15m } = currency;
    let row = table.querySelector(`#${name}`);

    if (!row) {
      return;
    }

    let nameCell = row.querySelector(".js-name");
    let last15mCell = row.querySelector(".js-15m");
    let buyCell = row.querySelector(".js-buy");
    let lastCell = row.querySelector(".js-last");
    let sellCell = row.querySelector(".js-sell");

    nameCell.innerHTML = `${name} / ${symbol}`;
    setCurrencyCell(last15mCell, symbol, last15m);
    setCurrencyCell(buyCell, symbol, buy);
    setCurrencyCell(lastCell, symbol, last);
    setCurrencyCell(sellCell, symbol, sell);
  });
}
