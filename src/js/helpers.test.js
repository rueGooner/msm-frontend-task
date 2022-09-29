import { getData, currenciesToArray } from "./helpers";

describe("helpers.js", () => {
  let mockObj = {
    "15m": 56011.02,
    last: 56011.02,
    buy: 56011.02,
    sell: 56011.02,
    symbol: "$",
  };
  let mockResponse = {
    USD: mockObj,
  };

  describe("getData", () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse),
        })
      );

      fetch.mockClear();
    });

    describe("when called with a URL", () => {
      let url;
      let output;

      beforeEach(async () => {
        url = "http://www.test.com";
        output = await getData(url);
      });

      it("should make a fetch request", () => {
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it("should make a fetch request with the provided URL", () => {
        expect(fetch).toHaveBeenCalledWith(url);
      });

      it("should return a JSON response", () => {
        expect(output).toEqual(mockResponse);
      });
    });
  });

  describe("currenciesToArray", () => {
    describe("when provided with no input", () => {
      let output;

      beforeEach(() => {
        output = currenciesToArray();
      });

      it("should return an empty array", () => {
        expect(output).toEqual([]);
      });
    });

    describe("when provided with input", () => {
      let output;

      beforeEach(() => {
        output = currenciesToArray(mockResponse);
      });

      it("should return a formatted array with the key as name", () => {
        expect(output).toEqual([{ name: "USD", ...mockObj }]);
      });
    });
  });
});
