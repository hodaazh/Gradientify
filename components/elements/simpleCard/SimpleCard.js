import cn from "classnames";
import { toast } from "react-toastify";

import s from "./SimpleCard.module.css";
import { Button } from "../../commons";
import utils from "../../../utils/utils";

const SimpleCard = ({ pallet }) => {
  const { isHexTooLight, generateColors, validColor } = utils;
  const fontColorClass = isHexTooLight(pallet) ? s.dark : "";

  const copyClipborad = () => {
    navigator.clipboard.writeText(pallet);
    toast.success("copied to clipboard");
  };

  return (
    <div
      className={cn(s.container, "justify-between", "flex-row")}
      style={{ backgroundColor: pallet }}
    >
      <span className={fontColorClass}>{pallet}</span>
      <Button
        icon="copy"
        iconClassName={cn(s.icon, fontColorClass)}
        onClick={copyClipborad}
      />
    </div>
  );
};

export { SimpleCard };
