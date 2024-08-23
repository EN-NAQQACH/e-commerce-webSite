import { wixClients } from "@/lib/wixClients";
import { currentCart } from '@wix/ecom';
import { message } from 'antd'

interface AddToCartOption {
  productID: string;
  variantID?: string;
  quantity: number;
  cart: currentCart.Cart;
}

export const AddToCart = async ({ productID, variantID, quantity, cart }: AddToCartOption) => {
  const wixClient = await wixClients();
  const existingItem = cart?.lineItems?.find(
    (item) =>
      item.catalogReference!.catalogItemId === productID &&
      item.catalogReference!.options?.variantId === variantID
  );

  if (existingItem) {
    message.error("This item is already in your cart.");
    return;
  }
  let response;
  let data = {
    lineItems: [
      {
        catalogReference: {
          appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
          catalogItemId: productID,
          options: {
            variantId: variantID,
          },
        },
        quantity: quantity,
      },
    ],
  };
  try {
    response = await wixClient.currentCart.addToCurrentCart(data);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
  return response;
};


export const getcurrentCart = async () => {
  const wixClient = await wixClients();
  let response;
  try {
    response = await wixClient.currentCart.getCurrentCart();
  } catch (error) {
    console.error("Error getting cart:", error);
  }
  return response;
};

export const removeFromCart = async (lineItemId: string) => {
  const wixClient = await wixClients();
  let response;
  try {
    response = await wixClient.currentCart.removeLineItemsFromCurrentCart([lineItemId]);
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
  return response;
};