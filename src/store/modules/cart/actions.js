export function addToCart(product) {
  return {
    type: '@cart/ADD_PRODUCT',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_PRODUCT_BY_ID',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
