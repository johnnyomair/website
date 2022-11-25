import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { useEffect } from "react";
import splitbee from "@splitbee/web";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      splitbee.init({
        disableCookie: true,
        scriptUrl: "/bee.js",
        apiUrl: "/_hive",
      });
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
