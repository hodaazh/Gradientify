import { useState } from "react";
import cn from "classnames";
import { toast } from "react-toastify";

import s from "./TintsShades.module.css";
import { Button } from "../../components/commons";
import { SimpleCard } from "../../components/elements";
import utils from "../../utils/utils";

const TintsShades = () => {
  const [input, setInput] = useState("#f15025");
  const { generateColors, validColor } = utils;
  const [correct, setCorrect] = useState(true);
  const [pallets, setPallets] = useState([
    ...new Set([
      ...generateColors("#ffffff", input, 11),
      ...generateColors(input, "#000000", 11),
    ]),
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCorrect(true);
    if (!correct) {
      toast.error("Uh Oh! Wrong Input");
    }
    const color = [
      ...new Set([
        ...generateColors("#ffffff", input, 11),
        ...generateColors(input, "#000000", 11),
      ]),
    ];
    setPallets(color);
  };

  const setColorHandler = (e) => {
    setCorrect(true);
    if (!validColor(e.target.value)) {
      setCorrect(false);
      return;
    }
    setInput(e.target.value);
  };

  return (
    <div
      className={cn("container", "flex-column", "justify-between", s.container)}
      onSubmit={handleSubmit}
    >
      <form className={cn("flex-row", "flex-center", s.header)}>
        <h3>Make Tints and Shades</h3>
        <input placeholder="#f15025" onChange={setColorHandler} />
        <Button
          title="Generate"
          titleClassName={s.generateTitle}
          className={s.generateBtn}
          buttonType="submit"
        />
        <div style={{ backgroundColor: input }}></div>
      </form>
      <div className={cn("flex-row", "flex-wrap")}>
        {pallets.map((pallet, index) => (
          <SimpleCard key={index} {...{ pallet }} />
        ))}
      </div>
    </div>
  );
};

export default TintsShades;
