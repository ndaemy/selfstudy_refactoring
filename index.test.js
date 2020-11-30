const { statement } = require("./index");
const invoice = require("./invoices.json")[0];
const plays = require("./plays.json");

test("return correct invoice", () => {
  expect(statement(invoice, plays)).toBe(
    `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits`
  );
});
