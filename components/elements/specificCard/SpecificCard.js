import { useRef } from "react";
import cn from "classnames";
import Link from "next/link";
import { toast } from "react-toastify";

import s from "./SpecificCard.module.css";
import utils from "../../../utils/utils";

const SpecificCard = ({ id, colors: colorSet }) => {
  const { convertColorsToStr } = utils;
  const ref = useRef();

  const copyClipborad = () => {
    navigator.clipboard.writeText(`background:${convertColorsToStr(colorSet)}`);
    toast.success("copied to clipboard");
  };

  const showUsedColors = () => {
    return (
      <ul className={cn(s.colorUsedWrapper, "flex-row")}>
        {colorSet.map((color, index) => (
          <div
            key={index}
            className={s.colorUsed}
            style={{ background: `${color.color1}` }}
          ></div>
        ))}
      </ul>
    );
  };

  return (
    <div className={s.container}>
      <div
        ref={ref}
        className={s.headerWrapper}
        style={{ backgroundColor: colorSet[0].mainColor }}
      >
        <Link
          href={{
            pathname: `/specific-gradient/${id}`,
          }}
        >
          <a>
            <header
              className={s.header}
              style={{
                backgroundImage: convertColorsToStr(colorSet),
              }}
            ></header>
          </a>
        </Link>
      </div>
      <footer
        className={cn("flex-row", "align-base", "justify-between", s.footer)}
      >
        <div className={cn("flex-row", "justify-between", "align-base")}>
          <p onClick={() => copyClipborad()}>Copy Css</p>
          {showUsedColors()}
        </div>
      </footer>
    </div>
  );
};

export { SpecificCard };
