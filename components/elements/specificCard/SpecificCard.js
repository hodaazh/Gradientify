import cn from "classnames";

import s from "./SpecificCard.module.css";

const SpecificCard = () => {
  return (
    <div className={cn("flex-row", "flex-wrap", s.container)}>
      <div className={s.wrapper}>
        <div className={s.gradient1}></div>
      </div>
      <div className={s.wrapper}>
        <div className={s.gradient5}></div>
      </div>
      <div className={s.wrapper}>
        <div className={s.gradient2}></div>
      </div>
      <div className={s.wrapper}>
        <div className={s.gradient6}></div>
      </div>
      <div className={s.wrapper}>
        <div className={s.gradient3}></div>
      </div>
      <div className={s.wrapper}>
        <div className={s.gradient4}></div>
      </div>
    </div>
  );
};

export { SpecificCard };
