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

performance.mark("10-items/3-createSelectors - start");

for (let i = 0; i < 99_999_999; i++) {
  selectTotal(state);
}

performance.mark("10-items/3-createSelectors - end");
performance.measure(
  "10-items/3-createSelectors",
  "10-items/3-createSelectors - start",
  "10-items/3-createSelectors - end"
);
