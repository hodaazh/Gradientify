import { useState, useRef } from "react";
import cn from "classnames";

import s from "./MainWrapper.module.css";
import { Button } from "../../components/commons";
import { useTheme, useMobile } from "../../hooks";
import { useRotate, useRotateActions } from "../../context";
import utils from "../../utils/utils";

const MainWrapper = (Component, props) => (componentProps) => {
  const imgRef = useRef();
  const scrollRef = useRef();
  const isPhone = useMobile("phone");
  const { rotateArray } = utils;
  const { theme, gradient_colors } = componentProps.cookies;
  const { handleTheme, defaultTheme } = useTheme(theme);
  const [hex, setHex] = useState("");
  const [client, setClient] = useState({ x: 0, y: 0 });
  const direction = useRotate();
  const setDirection = useRotateActions();

  const directionRotate = () => {
    setDirection(rotateArray(direction));
  };

  const handleSerachHex = (e) => {
    setHex(e.target.value);
  };

  const handleMoveImage = (e) => {
    setClient({ ...client, x: e.clientX, y: e.clientY });
    imgRef.current.style.transform = `translate(${client.x / 200}px , ${
      client.y / 70
    }px) rotate(0.0001deg)`;
  };

  const scrollBottom = (e) => {
    e.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={s.container} onMouseMove={handleMoveImage}>
      <section className={cn("container", s.mainDesc)}>
        <div className={s.mainDescLeft}>
          <h1>Find the Perfect gradient for your next projects</h1>
          <p>
            Gradientify is a web-based all-in-one gradient editor that provides
            100+ trendy, beautiful, carefully crafted gradients for your next
            projects. Copy CSS Snippet, Download PNGs, generates a nice color
            gradient, and easily makes tints and shades of a single color.
          </p>
          <div className={s.mainDescBtnWrapper}>
            <button
              className={s.tryGradientBtn}
              onClick={() => scrollBottom(scrollRef)}
            >
              Try Gradientify
            </button>
          </div>
        </div>
        <div className={s.mainDescRight} ref={imgRef}>
          <img src="/images/banner.png" />
        </div>
      </section>
      <section
        className={cn(s.middleNavContainer, {
          [s.dark]: defaultTheme,
        })}
      >
        <div className={cn(s.middleNav, "container", "justify-between")}>
          <div className="flex-row">
            <Button
              icon="spinner"
              title={isPhone ? "" : "Rotate"}
              onClick={directionRotate}
              withBorder
            />
            {!isPhone && (
              <input
                placeholder="Search Hex"
                className={cn(s.input, { [s.sun]: !defaultTheme })}
                onChange={handleSerachHex}
              />
            )}
          </div>
          <div className="flex-row">
            <Button
              icon="bookmark-solid"
              title={isPhone ? "" : "Save Gradients"}
              type="link"
              href="/saved-gradients"
              withBorder
            />
            <Button
              icon="plus"
              title={isPhone ? "" : "New Gradients"}
              className={s.plusBtn}
              href="/new-gradients"
              type="link"
              withBorder
            />
            <Button
              icon={defaultTheme ? "moon" : "sun"}
              onClick={handleTheme}
              withBorder
            />
          </div>
        </div>
      </section>
      <Component
        {...componentProps}
        {...{ hex, defaultTheme, gradient_colors, scrollRef }}
      />
    </div>
  );
};

export default MainWrapper;
