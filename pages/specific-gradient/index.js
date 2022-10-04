import s from "./SpecificGradient.module.css";
import cn from "classnames";
import { SpecificCard } from "../../components/elements";

const SpecificGradient = () => {
  return (
    <div className={cn("flex-center", s.container)}>
      <SpecificCard />
    </div>
  );
};

export default SpecificGradient;
