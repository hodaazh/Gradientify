import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import { Header } from "../components/elements";
import { RotateProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <RotateProvider>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        hideProgressBar={true}
        closeOnClick
        position="top-center"
      />
    </RotateProvider>
  );
}

export default MyApp;
