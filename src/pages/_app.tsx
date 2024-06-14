import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
