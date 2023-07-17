// import { MohytaLogo } from "@materialize/@core/components/logo/mohyta-logo";
// import CloseIcon from "@mui/icons-material/Close";
// import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import s from "./Banner.module.css";
// import { BannerContainer } from "./banner.styled";

const Banner = () => {
  const installBtnRef = useRef(null);
  const [ShowBanner, SetShowBanner] = useState(false);
  let deferredPrompt;

  useEffect(() => {
    // window.addEventListener('DOMContentLoaded', () => {
    //   if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.ready.then(() => {
    //       console.log('sw ready');
    //     });

    //     navigator.serviceWorker.register('/sw.js')
    //     .then(() => {
    //       console.log('sw registered');
    //     });
    //   }
    // });

    if (document.readyState !== "loading") {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          console.log("sw ready");
        });
        navigator.serviceWorker.register("/sw.js").then(() => {
          console.log("sw registered");
        });
      }
    }

    const handleBeforeInstallPrompt = (e) => {
      console.log("eee", e);
      e.preventDefault();
      deferredPrompt = e;
      if (deferredPrompt) {
        SetShowBanner(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    installBtnRef.current.addEventListener("click", handleInstallButtonClick);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      installBtnRef.current.removeEventListener(
        "click",
        handleInstallButtonClick
      );
    };
  }, []);

  const handleInstallButtonClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  };

  function handelCloseBanner(e) {
    e.preventDefault();
    SetShowBanner(false);
  }
  return (
    <div
      className={s.container}
      style={{ display: ShowBanner ? "flex" : "none" }}
    >
      <p ref={installBtnRef}>ایا تمایل به نصب نسخه اپ دارید؟</p>
      <div
        style={{
          padding: "0px",
          margin: "0px",
          minWidth: "0px",
        }}
        onClick={handelCloseBanner}
      >
        close
      </div>
    </div>
  );
};

export { Banner };
