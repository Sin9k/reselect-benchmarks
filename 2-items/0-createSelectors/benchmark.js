const { PerformanceObserver, performance } = require("perf_hooks");

const state = require("../state");
const selectors = require("./selectors");

const { selectTotal } = selectors;

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item.name, +" " + item.duration);
  });
});

obs.observe({ entryTypes: ["measure"], buffer: true });

performance.mark("2-items/0-createSelectors - start");

for (let i = 0; i < 99_999_999; i++) {
  selectTotal(state);
}

performance.mark("2-items/0-createSelectors - end");
performance.measure(
  "2-items/0-createSelectors",
  "2-items/0-createSelectors - start",
  "2-items/0-createSelectors - end"
);
