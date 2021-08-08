export const initialData = {
  products: [],
  cart: [],
  saveLater: [],
};

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS": {
      return { ...state, products: payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...payload.item, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== payload.itemId
        ),
      };
    }
    case "INC_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id !== payload._id
            ? item
            : {
                ...item,
                quantity: item.quantity + 1,
              }
        ),
      };
    }
    case "DEC_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id !== payload._id
            ? item
            : {
                ...item,
                quantity: item.quantity - 1,
              }
        ),
      };
    }
    case "ROMOVE_PRODUCT": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload._id),
      };
    }
    case "SAVED_FOR_LATER": {
      return {
        ...state,
        saveLater: [...state.saveLater, payload],
        cart: state.cart.filter((item) => item._id !== payload._id),
      };
    }
    case "REMOVE_FROM_SAVE_LATER": {
      return {
        ...state,
        saveLater: state.saveLater.filter((item) => item._id !== payload._id),
      };
    }
  }
};
