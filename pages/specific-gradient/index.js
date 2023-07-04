import cn from "classnames";

import s from "./SpecificGradient.module.css";
import { SpecificCard } from "../../components/elements";
import { SPECIFIC_GRADIENT_CONST } from "../../constants";

const SpecificGradient = () => {
  const { gradients } = SPECIFIC_GRADIENT_CONST;

  return (
    <div>
      <div className={cn("container", s.container)}>
        {gradients.map((item) => {
          return item.map(({ id, colors }) => (
            <SpecificCard key={id} {...{ colors, id }} />
          ));
        })}
      </div>
    </div>
  );
};

export default SpecificGradient;
