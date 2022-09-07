import { useEffect } from "react";
import { useColorSet, useColorSetActions } from "../context/RotateProvider";
import { HOME_CONST } from "../constants";

const useBookmark = () => {
  const { gradientItems } = HOME_CONST;
  const colorSet = useColorSet();
  const setColorSet = useColorSetActions();

  useEffect(() => {
    const localData =
      JSON.parse(localStorage.getItem("gradient-colors")) || gradientItems;
    localData && setColorSet(localData);
  }, []);

  const _renderBookmark = (id) => {
    const index = colorSet.findIndex((color) => color.id == id);
    const selectedColor = { ...colorSet[index] };
    selectedColor.active = !selectedColor.active;
    const updatedColors = [...colorSet];
    updatedColors[index] = selectedColor;
    setColorSet(updatedColors);
    localStorage.setItem("gradient-colors", JSON.stringify(updatedColors));
  };

  return {
    _renderBookmark,
  };
};

export { useBookmark };
