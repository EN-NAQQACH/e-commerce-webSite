import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '@wix/stores';
import { currentCart } from '@wix/ecom';
import { WixClient } from '@wix/sdk';
interface LineItem {
  catalogReference: {
    appId: string;
    catalogItemId: string;
    options?: {
      variantId: string;
    };
  };
  quantity: number;
}

interface CartState {
  cart: currentCart.Cart | null;
  isLoading: boolean;
  counter: number;
  subtotal: number;
}

const initialState: CartState = {
  cart: null,
  isLoading: false,
  counter: 0,
  subtotal: 0,
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // In this case, PayloadAction<LineItem> means that the action has a payload of type LineItem.
    addToCart: (state, action: PayloadAction<currentCart.Cart>) => {
      state.isLoading = true;
      const cart = action.payload;
      // Simulate adding to cart logic
      if (state.cart) {
        state.cart = cart;
      } else {
        state.cart = null
      }
      state.counter = state.cart!.lineItems!.length;
      state.isLoading = false;

    },

    getCart: (state, action: PayloadAction<currentCart.Cart | null>) => {
      if (action.payload === null) {
        state.cart = { lineItems: [] }; // Set cart to an empty array
        state.counter = 0;
      } else {
        state.cart = action.payload;
        state.counter = action.payload.lineItems?.length || 0;
      }
      state.isLoading = false;
    },
    removeItemFromCart: (state, action: PayloadAction<currentCart.Cart | null>) => {
      if (action.payload === null) {
        state.cart = { lineItems: [] }; // Set cart to an empty array
        state.counter = 0;
      } else {
        state.cart = action.payload;
        state.counter = action.payload.lineItems?.length || 0;
      }
      state.isLoading = false;
    }


  },
});

export const { addToCart, getCart,removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// The name of the action creator is the same as the reducer name.
// The action type is automatically generated as 'sliceName/reducerName' for exaple cart/addToCart
// Dispatching addToCart(...) triggers the addToCart reducer.
// ya3ni kola action katginira bsmya dyal reducer dyalha
// o mnin kandir dispatch laction "addToCart" katmchii katksed reducer addToCart
// o l action katkon bhal haka addToCart(somePayload) ya3ni katkon haza m3aha payload

/*
In Redux, whenever you dispatch an action, the action is an object that typically contains:
type: A string that describes the action being performed (e.g., 'cart/addToCart').
payload: The data that you want to pass to the reducer so it can update the state.
*/

/*
for example action addToCart bhal haka dayra :
{
  type: 'cart/addToCart',
  payload: {
    catalogReference: {
      appId: 'sample-app-id',
      catalogItemId: 'sample-item-id',
      options: {
        variantId: 'sample-variant-id'
      }
    },
    quantity: 1
  }
}

PayloadAction<LineItem>: This tells TypeScript that the action object should have:
A type property (which is auto-generated based on the slice and reducer name)(e.g., 'cart/addToCart')
A payload property, which must match the LineItem interface.
*/