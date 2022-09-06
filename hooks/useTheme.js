import { useState } from "react";
import { setCookie } from "nookies";

const useTheme = (theme) => {
  const [defaultTheme, setDefaultTheme] = useState(
    theme == "true" ? true : false
  );

  const handleTheme = () => {
    setDefaultTheme(!defaultTheme);
    setCookie(null, "theme", !defaultTheme, {
      maxAge: 30 * 24 * 60 * 60,
    });
  };

  return {
    defaultTheme,
    setDefaultTheme,
    handleTheme,
  };
};

export { useTheme };
