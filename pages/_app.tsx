import type { AppProps } from "next/app";
import {
  embeddedWallet,
  localWallet,
  paperWallet,
  smartWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Goerli } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Goerli;

// export const smartWalletConfig = smartWallet({
//   factoryAddress: "0x6B1F8bBF4Af9267C0a483Da53BaE1118eadC50C1",
//   gasless: true,
//   personalWallets: [embeddedWallet()],
// });

export const editionDropAddress = "0xb9e2b6C6ce60d074b96DD19498dF2493f9A625B1";
export const editionDropTokenId = "0";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={"31dce317f0d4b6f5cafa37ab53a2b087"}
      activeChain={activeChain}
      supportedWallets={[embeddedWallet(), localWallet()]}
      authConfig={{
        domain: "https://thirdweb-preview.com",
        authUrl: `https://api.thirdweb-preview.com/v1/auth`,
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
