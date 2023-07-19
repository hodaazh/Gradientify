import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import { Header } from "../components/elements";
import { Banner } from "../components/commons";
import { RotateProvider } from "../context";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker.register("/public/sw.js").then(
  //       (registration) => {
  //         console.log("Service worker registration succeeded:", registration);
  //       },
  //       (error) => {
  //         console.error(`Service worker registration failed: ${error}`);
  //       }
  //     );
  //   } else {
  //     console.error("Service workers are not supported.");
  //   }
  // }, []);

  return (
    <RotateProvider>
      {/* <Banner /> */}
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        hideProgressBar={true}
        closeOnClick
        position="top-center"
        className="flex flex-column"
      />
    </RotateProvider>
  );
}

export default MyApp;
