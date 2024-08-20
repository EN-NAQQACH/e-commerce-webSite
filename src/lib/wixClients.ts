import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { currentCart } from "@wix/ecom";


export const wixClients = async () => {
  let refreshToken
  try {
     refreshToken = JSON.parse(Cookies.get('refreshToken') || "{}");
  } catch (error) {
    console.log(error);

  }

   const myWixClient = createClient({
    modules: {
      products,
      collections,
      currentCart,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: {
          value: "",
          expiresAt: 0,
        }
      }
    })
  })
  return myWixClient;
}

