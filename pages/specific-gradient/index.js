import cn from "classnames";

import s from "./SpecificGradient.module.css";
import { SpecificCard } from "../../components/elements";
import { SPECIFIC_GRADIENT_CONST } from "../../constants";

const SpecificGradient = () => {
  const { gradients } = SPECIFIC_GRADIENT_CONST;

  return (
    <div className={cn("flex-center", "flex-wrap", s.container)}>
      {gradients.map((item) => (
        <SpecificCard key={item.id} colorSet={item} />
      ))}
    </div>
  );
};

export default SpecificGradient;
