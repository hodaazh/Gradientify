import cn from "classnames";

import s from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={cn(s.container, "flex-row")}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loading };
