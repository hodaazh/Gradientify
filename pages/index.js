import { useState, useEffect } from "react";
import cn from "classnames";
import nookies from "nookies";

import s from "./index.module.css";
import { Card } from "../components/elements";
import { Loading } from "../components/commons";
import { HOME_CONST } from "../constants";
import MainWrapper from "../hoc/mainWrapper/MainWrapper";
import { useColorSet, useColorSetActions } from "../context/RotateProvider";

const Home = ({ hex, defaultTheme, scrollRef }) => {
  const { gradientItems } = HOME_CONST;
  const colorSet = useColorSet();
  const setColorSet = useColorSetActions();
  const [searchHex, setSerachHex] = useState(colorSet);

  useEffect(() => {
    const localData =
      JSON.parse(localStorage.getItem("gradient-colors")) || gradientItems;
    localData && setColorSet(localData);
  }, []);

  useEffect(() => {
    const filteredHex = colorSet.filter(({ colors }) =>
      colors.some((color) => color.toLowerCase().includes(hex))
    );
    setSerachHex(filteredHex);
  }, [hex]);

  if (!searchHex)
    return <div className="flex-center">{/* <Loading />; */}</div>;

  return (
    <div
      className={cn(s.container, { [s.dark]: defaultTheme })}
      ref={scrollRef}
    >
      <section className={cn("container", "flex-column", s.gradients)}>
        <h2>
          100+ Carefully Crafted Gradients ready to use in your next projects.
        </h2>
        <div className={cn(s.gradientItemsWrapper)}>
          {searchHex.map(({ colors, id }) => (
            <Card key={id} {...{ colors, id }} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainWrapper(Home);

export async function getServerSideProps(ctx) {
  // Parse
  const cookies = nookies.get(ctx);
  return { props: { cookies } };
}
