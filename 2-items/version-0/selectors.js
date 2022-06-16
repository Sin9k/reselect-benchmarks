const reselect = require("reselect");
const { createSelector } = reselect;

const selectShopItems = (state) => state.shop.items;
const selectTaxPercent = (state) => state.shop.taxPercent;

const selectSubtotal = createSelector(selectShopItems, (items) =>
  items.reduce((subtotal, item) => subtotal + item.value, 0)
);

const selectTax = createSelector(
  selectSubtotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

const selectTotal = createSelector(
  selectSubtotal,
  selectTax,
  (subtotal, tax) => ({ total: subtotal + tax })
);

module.exports = { selectTotal };
