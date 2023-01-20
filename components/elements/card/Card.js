import { useState, useEffect, useRef, createRef } from "react";
import Link from "next/link";
import cn from "classnames";
import AOS from "aos";
import { toast } from "react-toastify";

import s from "./Card.module.css";
import { useRotate } from "../../../context/RotateProvider";
import {
  useColorSet,
  useColorSetActions,
} from "../../../context/RotateProvider";
import { useBookmark } from "../../../hooks";

const Card = ({ colors, id, gradient_colors }) => {
  const elementRef = useRef();
  const refCopyCss = useRef();
  // const refCopyTextCss = useRef();
  const elementsRef = colors.map(() => createRef());
  const [strGradientColors] = useState(colors.toString());
  const direction = useRotate();
  const colorSet = useColorSet();
  const setColorSet = useColorSetActions();
  const { _renderBookmark } = useBookmark();

  useEffect(() => {
    AOS.init();
    const localData = gradient_colors && JSON.parse(gradient_colors);
    localData && setColorSet(localData);
  }, []);

  useEffect(() => {
    elementRef.current.style.backgroundImage = `linear-gradient(to ${direction[0].dir},${strGradientColors})`;
  }, [direction, strGradientColors]);

  const copyClipborad = (x) => {
    toast.dismiss();
    x === "cssText"
      ? navigator.clipboard.writeText(
          `background:linear-gradient(to ${direction[0].dir}${strGradientColors})`
        )
      : navigator.clipboard.writeText(x);
    toast.success("copied to clipboard");
  };

  const _renderFooter = () => {
    return colors.map((color, index) => (
      <div
        key={color.id}
        className={s.colorsWrapper}
        onMouseEnter={() => (elementsRef[index].current.style.opacity = 1)}
        onMouseLeave={() => (elementsRef[index].current.style.opacity = 0)}
        onClick={() => copyClipborad(color)}
      >
        <div className={s.circle} style={{ backgroundColor: `${color}` }}></div>
        <div ref={elementsRef[index]} className={"tooltip2"}>
          Copy {color}
        </div>
      </div>
    ));
  };

  return (
    <div className={s.container} data-aos="fade-up" data-aos-duration="700">
      <div
        className={cn("flex-center", s.bookmarkIconWrapper)}
        onClick={() => _renderBookmark(id)}
      >
        <i
          className={cn(
            s.icon,
            `icon-bookmark-${colorSet[id - 1]?.active ? "solid" : "regular"}`
          )}
        />
      </div>
      <Link href={`/gradient/${id}`}>
        <a>
          <header
            className={s.header}
            style={{
              backgroundColor: `linear-gradient(to ${direction[0].dir},${strGradientColors})`,
            }}
            ref={elementRef}
          ></header>
        </a>
      </Link>
      <footer
        className={cn("flex-row", "align-base", "justify-between", s.footer)}
      >
        <div className={cn("flex-row", "align-base")}>{_renderFooter()}</div>
        <div className="flex-row">
          <div
            className={s.copyCssWrapper}
            onMouseEnter={() => (refCopyCss.current.style.opacity = 1)}
            onMouseLeave={() => (refCopyCss.current.style.opacity = 0)}
          >
            <p onClick={() => copyClipborad("cssText")}>Copy Css</p>
            <div ref={refCopyCss} className="tooltip">
              Copy Css
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Card };
