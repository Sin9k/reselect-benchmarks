const state = require("../state");
const selectors = require("./selectors");

const { selectTotal } = selectors;

const start = new Date();

for (let i = 0; i < 99_999_999; i++) {
  selectTotal(state);
}

const stop = new Date();

console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);
