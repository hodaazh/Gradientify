import { useRef, useState, useEffect, createRef } from "react";
import cn from "classnames";
import { toast } from "react-toastify";

import s from "./Gradient.module.css";
import { Button } from "../../components/commons";
import { useBookmark } from "../../hooks";
import {
  useRotate,
  useRotateActions,
  useColorSet,
} from "../../context/RotateProvider";
import utils from "../../utils/utils";

const Gradient = ({ id }) => {
  const [gradientColors, setGradientColors] = useState("");
  const colorSet = useColorSet();
  const { colors, active } = colorSet.find((item) => item.id == id);
  const elementsRef = colors.map(() => createRef());
  const direction = useRotate();
  const setDirection = useRotateActions();
  const ref = useRef();
  const { _renderBookmark } = useBookmark();
  const { _export, rotateArray } = utils;

  useEffect(() => {
    setGradientColors(colors.toString());
  }, []);

  useEffect(() => {
    ref.current.style.backgroundImage = `linear-gradient(to left,${gradientColors})`;
  }, [gradientColors]);

  const directionRotate = () => {
    setDirection(rotateArray(direction));
    ref.current.style.backgroundImage = `linear-gradient(to ${direction[0].dir},${gradientColors})`;
  };

  const copyClipborad = (x) => {
    x === "cssText"
      ? navigator.clipboard.writeText(
          `background:linear-gradient(to ${direction[0].dir}${gradientColors})`
        )
      : navigator.clipboard.writeText(x);
    toast.success("copied to clipboard");
  };

  const _renderColors = () => {
    return colors.map((color, index) => (
      <div
        key={color.id}
        className={s.colorsWrapper}
        onMouseEnter={() => (elementsRef[index].current.style.opacity = 1)}
        onMouseLeave={() => (elementsRef[index].current.style.opacity = 0)}
        onClick={() => copyClipborad(color)}
      >
        <div
          className={s.colorFulCircle}
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div ref={elementsRef[index]} className={"tooltip2"}>
          Copy {color}
        </div>
      </div>
    ));
  };

  return (
    <div className={cn("flex-column", s.container)}>
      <div className={s.gradientColor} ref={ref}></div>
      <div className={cn("container", s.gradiendDesc)}>
        <div className="flex-row">{_renderColors()}</div>
        <div className={s.gradientDescText}>
          <div className={cn("flex-row", "flex-wrap")}>
            <span className="gray">1</span>
            <span className="red">background</span>
            <span className="gray">:</span>
            <span className="yellow">{colors[0]}</span>
          </div>
          <div className={cn("flex-row", "flex-wrap")}>
            <span className="gray">2</span>
            <span className="red">background</span>
            <span className="gray">:</span>
            <span className="red">linear-gradient</span>
            <span className="gray">(</span>
            <span className="red">to {direction[0].dir}</span>
            {colors.map((color) => (
              <div key={color.id}>
                <span className="gray">,</span>
                <span className="yellow">{color}</span>
              </div>
            ))}
            <span className="gray">)</span>
          </div>
        </div>
        <footer className={cn("flex-row", "align-base", "justify-between")}>
          <div
            className={cn("flex-row", "align-base", "flex-wrap", s.footerLeft)}
          >
            <div onClick={() => copyClipborad("cssText")}>
              <span>Copy Css</span>
            </div>
            <div>
              <span>Copy TextCss</span>
            </div>
            <div>
              <span onClick={directionRotate}>Rotate Gradient</span>
            </div>
          </div>

          <div className={cn("flex-row", s.footerRight)}>
            <Button
              title="Saved"
              icon={`bookmark-${active ? "solid" : "regular"}`}
              className={s.saveBtn}
              titleClassName={cn(s.saveBtn_title, { [s.activeColor]: active })}
              iconClassName={cn(s.saveBtn_icon, { [s.activeColor]: active })}
              onClick={() => _renderBookmark(id)}
            />
            <Button
              title="Download"
              className={s.downloadBtn}
              onClick={() => _export(ref, "img", "my-gradient")}
            />
          </div>
        </footer>
      </div>
      <h2 className="flex-center" style={{ color: colors[0] }}>
        Gradientify
      </h2>
    </div>
  );
};

export default Gradient;

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.index,
    },
  };
}
