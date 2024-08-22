import { wixClients } from "@/lib/wixClients";

interface AddToCartOption {
  productID: string;
  variantID?: string;
  quantity: number;
}

export const AddToCart = async ({productID,variantID,quantity}: AddToCartOption) => {
  const wixClient = await wixClients();
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
    console.error("Error adding to cart:",error);
  }
  return response ;

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
