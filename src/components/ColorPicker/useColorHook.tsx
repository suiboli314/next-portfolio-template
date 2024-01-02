"use client";

import { createContext, useState, useContext, useEffect } from "react";
import getClosestColor from "@/utils/colorDistance";

type IColorInputType = {
  pickColor: string;
  setPickColor: React.Dispatch<React.SetStateAction<string>>;
  nearColor: string;
  setNearColor: React.Dispatch<React.SetStateAction<string>>;
  minDelta: number;
  setMinDelta: React.Dispatch<React.SetStateAction<number>>;
  colorList: string[];
  setColorList: React.Dispatch<React.SetStateAction<string[]>>;
  getNearColor: () => void;
};

export const ColorContext = createContext<IColorInputType>({
  pickColor: "",
  setPickColor: () => {},
  nearColor: "",
  setNearColor: () => {},
  minDelta: 0,
  setMinDelta: () => {},
  colorList: [],
  setColorList: () => {},
  getNearColor: () => {},
});

export const useColorHook = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorHook must be used within a ColorDataProvider");
  }
  return context;
};

export const ColorDataProvider = ({ children }: { children?: React.ReactNode }) => {
  const [pickColor, setPickColor] = useState("#222222");
  const [nearColor, setNearColor] = useState("#222222");
  const [minDelta, setMinDelta] = useState(0);
  const [colorList, setColorList] = useState<string[]>([]);

  const getNearColor = () => {
    if (pickColor.length === 0 || colorList.length === 0) return;
    const [closestColor, distance] = getClosestColor(pickColor, colorList);
    setNearColor(closestColor);
    setMinDelta(distance);
  };

  useEffect(() => getNearColor(), [colorList]);

  return (
    <ColorContext.Provider
      value={{
        pickColor,
        setPickColor,
        nearColor,
        setNearColor,
        minDelta,
        setMinDelta,
        colorList,
        setColorList,
        getNearColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorDataProvider;
