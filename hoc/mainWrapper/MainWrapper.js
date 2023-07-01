import { useState, useRef } from "react";
import Link from "next/link";
import cn from "classnames";

import s from "./MainWrapper.module.css";
import { Button } from "../../components/commons";
import { useTheme, useMobile } from "../../hooks";
import { useRotate, useRotateActions } from "../../context";
import utils from "../../utils/utils";

const MainWrapper = (Component, props) => (componentProps) => {
  const { theme, gradient_colors } = componentProps.cookies;
  const { rotateArray } = utils;
  const { handleTheme, defaultTheme } = useTheme(theme);
  const [hex, setHex] = useState("");
  const [client, setClient] = useState({ x: 0, y: 0 });
  const imgRef = useRef();
  const direction = useRotate();
  const setDirection = useRotateActions();

  const isPhone = useMobile("phone");

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

  return (
    <div className={cn("container", s.container)} onMouseMove={handleMoveImage}>
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
            <button className={s.tryGradientBtn}>
              <Link href="#">
                <a>Try Gradientify</a>
              </Link>
            </button>
            <button className={s.productHuntBtn}>
              <a href="#">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=355830&amp;theme=dark&amp;period=daily" />
              </a>
            </button>
          </div>
        </div>
        <div className={s.mainDescRight} ref={imgRef}>
          <img src="/images/banner.png" />
        </div>
      </section>
      <section
        className={cn("container", "justify-between", s.middleNavContainer, {
          [s.dark]: defaultTheme,
        })}
      >
        <div className="flex-row">
          <Button title="All Gradient" type="link" href="/" withBorder />
          <Button
            icon="spinner"
            title={isPhone ? "" : "Rotate"}
            className={s.rotateBtn}
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
            withBorder
          />
          <Button
            icon={defaultTheme ? "moon" : "sun"}
            onClick={handleTheme}
            withBorder
          />
        </div>
      </section>
      <Component
        {...componentProps}
        {...{ hex, defaultTheme, gradient_colors }}
      />
    </div>
  );
};

export default MainWrapper;
