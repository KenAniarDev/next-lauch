import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useServiceWorker } from "@/shared/pwa/initializeServiceWorker";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useServiceWorker();
  useEffect(() => {
    initialize();
  }, []);

  return <Component {...pageProps} />;
}
