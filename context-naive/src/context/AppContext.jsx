import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  cart: {
    items: [],
    isOpen: true,
  },

  user: {
    name: "Siva",
    isLoggedIn: true,
  },

  ui: {
    theme: "light",
    notification: null,
  },
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const existingItem = state.cart.items.find(
        item => item.productId === product.id
      );

      let updatedItems;

      if (existingItem) {
        updatedItems = state.cart.items.map(item =>
          item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedItems = [
          ...state.cart.items,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          items: updatedItems,
        },
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(
            item => item.productId !== action.payload
          ),
        },
      };

    case "TOGGLE_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          isOpen: !state.cart.isOpen,
        },
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        ui: {
          ...state.ui,
          theme:
            state.ui.theme === "light"
              ? "dark"
              : "light",
        },
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};