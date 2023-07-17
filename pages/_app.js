import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import { Header } from "../components/elements";
import { Banner } from "../components/commons";
import { RotateProvider } from "../context";

function MyApp({ Component, pageProps }) {
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
