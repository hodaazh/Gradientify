import { useState, useRef, useEffect } from "react";
import cn from "classnames";

import s from "./GradientGenerator.module.css";
import { GRADIENT_GENERATOR_CONST } from "../../constants";
import { Button } from "../../components/commons";
import { useMobile } from "../../hooks";
import utils from "../../utils/utils";

const GradientGenerator = () => {
  const { generatorItems } = GRADIENT_GENERATOR_CONST;
  const { isHexTooLight, generateColors, validColor } = utils;
  const isPhone = useMobile("phone");
  const inputLeftRef = useRef();
  const inputRightRef = useRef();
  const mainRef = useRef();
  const textRef = useRef();

  const [inputLeft, setInputLeft] = useState("#051937");
  const [inputRight, setInputRight] = useState("#A8EB12");
  const [valid, setValid] = useState(true);
  const [dir, setDir] = useState("linear");
  const [ori, setOri] = useState("top");

  useEffect(() => {
    if (!validColor(inputLeft) || !validColor(inputRight)) {
      return;
    }
    const [clr1, clr2, clr3, clr4, clr5] = generateColors(
      inputLeft,
      inputRight
    );  
    const containerClass = `${dir}-gradient(to ${ori}, ${clr1}, ${clr2},${clr3},${clr4},${clr5})`;
    mainRef.current.style.backgroundImage = containerClass;
    textRef.current.innerText = `background: ${containerClass}`;
  }, [inputLeft, inputRight, dir, ori]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputLeftValue = inputLeftRef.current.value;
    const inputRightValue = inputRightRef.current.value;

    if (validColor(inputLeftValue) && validColor(inputRightValue)) {
      setValid(true);
    } else {
      setValid(false);
    }

    inputLeftRef.current.style.backgroundColor = inputLeftValue;
    inputRightRef.current.style.backgroundColor = inputRightValue;
    setInputLeft(inputLeftRef.current.value);
    setInputRight(inputRightRef.current.value);
  };

  const handleArrow = (title) => {
    if (title) {
      setOri(title);
      setDir("linear");
    } else {
      setDir("radial");
    }
  };

  return (
    <div
      className={cn("container", "flex-column", "flex-center", s.container)}
      ref={mainRef}
    >
      <h1>{isPhone ? "Generate" : "Generate a CSS Color Gradient"}</h1>
      <p className={s.desc}>Choose orientation</p>
      <div className={cn("flex-center", "flex-wrap")}>
        {generatorItems.map(({ id, icon, title }) => (
          <Button
            key={id}
            icon={icon}
            iconClassName={s.icon}
            onClick={() => handleArrow(title)}
          />
        ))}
      </div>
      <p>Enter Colors & press Enter</p>
      <form
        className={cn("flex-coumn", s.inputWrapper)}
        type="submit"
        onSubmit={handleSubmit}
      >
        <div className={cn("flex-row", "flex-center")}>
          <input
            className={cn(s.input, { [s.darkText]: isHexTooLight(inputLeft) })}
            defaultValue={inputLeft}
            style={{ backgroundColor: inputLeft }}
            ref={inputLeftRef}
          />
          <input
            className={cn(s.input, { [s.darkText]: isHexTooLight(inputRight) })}
            defaultValue={inputRight}
            style={{ backgroundColor: inputRight }}
            ref={inputRightRef}
          />
        </div>
        <button></button>
        {!valid && <span className="flex-center"> color not valid </span>}
        <div className={s.gradientCode}>
          <p ref={textRef}>
            {`background: linear-gradient(to top, #051937, #004d7a,#008793,#00bf72,#a8eb12)`}
          </p>
        </div>
      </form>
    </div>
  );
};

export default GradientGenerator;
