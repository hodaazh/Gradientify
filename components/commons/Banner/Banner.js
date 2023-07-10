// import { MohytaLogo } from "@materialize/@core/components/logo/mohyta-logo";
// import CloseIcon from "@mui/icons-material/Close";
// import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// import { BannerContainer } from "./banner.styled";

function Banner() {
  const installBtnRef = useRef(null);
  const [ShowBanner, SetShowBanner] = useState(false);
  let deferredPrompt = { prompt: () => null, userChoice };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      deferredPrompt = e;
      try {
        if (deferredPrompt) {
          SetShowBanner(true);
        }
      } catch (error) {
        return;
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
    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        return;
      } else {
        return;
      }
    } catch (error) {
      return;
    }
  };

  function handelCloseBanner(e) {
    e.preventDefault();
    SetShowBanner(false);
  }

  return (
    <div style={{ display: ShowBanner ? "flex" : "none" }}>
      <p ref={installBtnRef}>ایا تمایل به نصب نسخه اپ دارید؟</p>
      <div
        style={{
          padding: "0px",
          margin: "0px",
          minWidth: "0px",
        }}
        onClick={handelCloseBanner}
      ></div>
    </div>
  );
}

export { Banner };
