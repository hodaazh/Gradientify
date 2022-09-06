import { useEffect, useState } from "react";
import cn from "classnames";
import nookies from "nookies";

import s from "./SavedGradients.module.css";
import MainWrapper from "../../hoc/mainWrapper/MainWrapper";
import { Card } from "../../components/elements";
import { useColorSet } from "../../context/RotateProvider";

const SavedGradients = () => {
  const [savedColors, setSavedColors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const colorSet = useColorSet();
  const emptyList = savedColors?.length > 0;

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("gradient-colors"));
    const colors = localData.filter((item) => item.active);
    setSavedColors(colors);
    setIsLoading(false);
  }, [colorSet]);

  if (isLoading) return <div>isLoading</div>;

  return (
    <div className={cn("container", s.container)}>
      <div className={s.gradients}>
        <h2>Saved Gradients</h2>
      </div>
      <div className={cn(s.gradientItemsWrapper)}>
        {savedColors.map(({ colors, id }) => (
          <Card
            key={id}
            {...{
              colors,
              id,
            }}
          />
        ))}
      </div>
      {!emptyList && (
        <div className={s.gradients}>
          <h2>Uh Oh! You have n't saved any gradient!</h2>
        </div>
      )}
    </div>
  );
};

export default MainWrapper(SavedGradients);

export async function getServerSideProps(ctx) {
  // Parse
  const cookies = nookies.get(ctx);
  return { props: { cookies } };
}
