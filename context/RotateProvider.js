import { useState, createContext, useContext } from "react";
import { HOME_CONST } from "../constants";

const RotateContext = createContext();
const RotateContextDispatcher = createContext();
const ColorContext = createContext();
const ColorContextDispatcher = createContext();

const RotateProvider = ({ children }) => {
  const { directionItems, gradientItems } = HOME_CONST;
  const newGradientItems = gradientItems.map((obj) => ({
    ...obj,
    active: false,
  }));
  const [direction, setDirection] = useState(directionItems);

  const [colorSet, setColorSet] = useState(newGradientItems);

  return (
    <RotateContext.Provider value={direction}>
      <ColorContext.Provider value={colorSet}>
        <RotateContextDispatcher.Provider value={setDirection}>
          <ColorContextDispatcher.Provider value={setColorSet}>
            {children}
          </ColorContextDispatcher.Provider>
        </RotateContextDispatcher.Provider>
      </ColorContext.Provider>
    </RotateContext.Provider>
  );
};

export { RotateProvider };

export const useRotate = () => useContext(RotateContext);
export const useRotateActions = () => useContext(RotateContextDispatcher);
export const useColorSet = () => useContext(ColorContext);
export const useColorSetActions = () => useContext(ColorContextDispatcher);
