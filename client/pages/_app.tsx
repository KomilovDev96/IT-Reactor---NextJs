import MainProviders from "@/app/providers/MainProviders";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

 function App({ Component, pageProps }: AppProps) {
  return (
    <MainProviders>
      <Component {...pageProps} />
    </MainProviders>
  );
}
export default appWithTranslation(App) 