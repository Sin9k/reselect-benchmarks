const selectShopItems = (state) => state.shop.items;
const selectTaxPercent = (state) => state.shop.taxPercent;

const selectSubtotal = (state) => {
  const items = selectShopItems(state);

  return items.reduce((subtotal, item) => subtotal + item.value, 0);
};

const selectTax = (state) => {
  const subtotal = selectSubtotal(state);
  const taxPercent = selectTaxPercent(state);

  return subtotal * (taxPercent / 100);
};

const selectTotal = (state) => {
  const subtotal = selectSubtotal(state);
  const tax = selectTax(state);

  return { total: subtotal + tax };
};

module.exports = { selectTotal };
