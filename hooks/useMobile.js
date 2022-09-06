import { useEffect, useState } from "react";

const useMobile = (device = "smallPhone") => {
  const [windowSize, setWindowSize] = useState(0);
  const smallPhonePoint = 576;
  const phonePoint = 768;
  const tabletPoint = 1024;

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  switch (device) {
    case "phone":
      return windowSize <= phonePoint;

    case "smallPhone":
      return windowSize <= smallPhonePoint;

    case "tablet":
      return windowSize <= tabletPoint;

    default:
      break;
  }
};

export { useMobile };
