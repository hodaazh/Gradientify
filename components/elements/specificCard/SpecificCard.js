import { useEffect, useState, useRef } from "react";
import cn from "classnames";
import Link from "next/link";
import { toast } from "react-toastify";

import s from "./SpecificCard.module.css";
import { Loading } from "../../commons";
import utils from "../../../utils/utils";

const SpecificCard = ({ colorSet }) => {
  const { _export } = utils;
  const ref = useRef();
  const [gradientColor, setGradientColor] = useState("");
  const [background, setBackground] = useState("");

  let colorr = "";

  useEffect(() => {
    setGradientColor(colorr);
    setBackground(colorSet[0].mainColor);
  }, [colorr]);

  colorSet.map((color, index) => {
    colorr =
      colorr +
      `radial-gradient(at ${color.startPoint},${color.color1} 0,${
        color.color2
      } 50%)${index < colorSet.length - 1 ? `,` : ``}`;
  });

  const copyClipborad = (x) => {
    x === "cssText"
      ? navigator.clipboard.writeText(`background:${gradientColor}`)
      : navigator.clipboard.writeText(x);
    toast.success("copied to clipboard");
  };

  if (!gradientColor) return <Loading />;

  return (
    <div className={s.container}>
      <div
        ref={ref}
        className={s.headerWrapper}
        style={{ backgroundColor: background }}
      >
        <Link href="#">
          <a>
            <header
              className={s.header}
              style={{
                backgroundImage: gradientColor,
              }}
            ></header>
          </a>
        </Link>
      </div>
      <footer
        className={cn("flex-row", "align-base", "justify-between", s.footer)}
      >
        <div className={cn("flex-row", "justify-between", "align-base")}>
          <p onClick={() => copyClipborad("cssText")}>Copy Css</p>
          <p onClick={() => _export(ref, "pdf", "my-gradient")}>download</p>
        </div>
      </footer>
    </div>
  );
};

export { SpecificCard };
