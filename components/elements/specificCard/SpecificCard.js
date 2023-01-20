import { useEffect, useState, useRef, useMemo } from "react";
import cn from "classnames";
import Link from "next/link";
import { toast } from "react-toastify";

import s from "./SpecificCard.module.css";
import { Loading } from "../../commons";
import utils from "../../../utils/utils";

const SpecificCard = ({ colorSet }) => {
  const { _export } = utils;
  const ref = useRef();

  const copyClipborad = () => {
    navigator.clipboard.writeText(
      `background:${colorSet.reduce(
        (prevValue, currentValue, currentIndex) =>
          prevValue +
          `radial-gradient(at ${currentValue.startPoint},${
            currentValue.color1
          } 0,${currentValue.color2} 50%)${
            currentIndex < colorSet.length - 1 ? `,` : ``
          }`,

        ""
      )}`
    );

    toast.success("copied to clipboard");
  };

  return (
    <div className={s.container}>
      <div
        ref={ref}
        className={s.headerWrapper}
        // style={{ backgroundColor: colorSet[0].mainColor }}
      >
        <Link href="#">
          <a>
            <header
              className={s.header}
              // style={{
              //   backgroundImage: colorSet.reduce(
              //     (prevValue, currentValue, currentIndex) =>
              //       prevValue +
              //       `radial-gradient(at ${currentValue.startPoint},${
              //         currentValue.color1
              //       } 0,${currentValue.color2} 50%)${
              //         currentIndex < colorSet.length - 1 ? `,` : ``
              //       }`,
              //     ""
              //   ),
              // }}
            ></header>
          </a>
        </Link>
      </div>
      <footer
        className={cn("flex-row", "align-base", "justify-between", s.footer)}
      >
        <div className={cn("flex-row", "justify-between", "align-base")}>
          <p onClick={() => copyClipborad()}>Copy Css</p>
          <p onClick={() => _export(ref, "pdf", "my-gradient")}>Download</p>
        </div>
      </footer>
    </div>
  );
};

export { SpecificCard };
