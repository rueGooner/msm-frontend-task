import { updateCurrencyTable } from "./update-page";

function innerHTML(selector) {
  return document.querySelector(selector).innerHTML;
}

describe("update-page.js", () => {
  describe("updateCurrencyTable", () => {
    let last15m = 123;
    let last = 124;
    let buy = 122;
    let sell = 125;
    let symbol = "SYMBOL";
    let name = "USD";

    beforeEach(() => {
      document.body.innerHTML = `<table id="bitcoin-prices">
          <tr id="${name}">
            <td class="js-name"></td>
            <td class="js-15m"></td>
            <td class="js-buy"></td>
            <td class="js-last"></td>
            <td class="js-sell"></td>
          </tr>
        </div>`;

      let data = [
        {
          "15m": last15m,
          last,
          buy,
          sell,
          symbol,
          name,
        },
      ];

      updateCurrencyTable(data);
    });

    it("should set the name cell to contain name and symbol", () => {
      expect(innerHTML(".js-name")).toBe(`${name} / ${symbol}`);
    });

    it("should set the last 15 minutes to provided value", () => {
      expect(innerHTML(".js-15m")).toBe(symbol + last15m.toFixed(2));
    });

    it("should set the buy cell to be provided value", () => {
      expect(innerHTML(".js-buy")).toBe(symbol + buy.toFixed(2));
    });

    it("should set the last cell to be provided value", () => {
      expect(innerHTML(".js-last")).toBe(symbol + last.toFixed(2));
    });

    it("should set the sell cell to be provided value", () => {
      expect(innerHTML(".js-sell")).toBe(symbol + sell.toFixed(2));
    });
  });
});
