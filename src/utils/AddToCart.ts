import { wixClients } from "@/lib/wixClients";

interface AddToCartOption {
  product_id: string;
  variant_id?: string;
  quantity: number;
}

export const AddToCart = async (option: AddToCartOption) => {
    console.log(option)
  const wixClient = await wixClients();

  // Properly format the catalogReference object
  const lineItem = {
    catalogReference: {
      appId: process.env.NEXT_PUBLIC_WIX_STORE,
      catalogItemId: option.product_id,
      options: option.variant_id ? [{ variantId: option.variant_id }] : [],
    },
    quantity: option.quantity,
  };

  try {
    // Make the request to add the item to the cart
    await wixClient.currentCart.addToCurrentCart({
      lineItems: [lineItem],
    });
  } catch (error) {
    console.error("Add to cart error:", error);
  }
};
