"use client";

import { useEffect, useState, memo } from "react";
import { useColorHook } from "@/components/ColorPicker/useColorHook";
import { TextField } from "@mui/material";
import { eqArray } from "@/utils/compare";

const stringToColorList = (input: string): string[] => {
  const regex = /#?([A-Fa-f0-9]{6}(?:[A-Fa-f0-9]{2})?)/g;
  const matches = input.match(regex) || [];
  const colorSet = new Set<string>();

  matches.forEach((color) => {
    if (color.startsWith("#")) color = color.slice(1);
    if (color.length === 8) color = color.slice(0, 6);
    colorSet.add(color);
  });

  return Array.from(colorSet);
};

export const ColorListTextInput = memo((props: { [x: string | number | symbol]: unknown }) => {
  const { ...otherProps } = props;
  const { colorList, setColorList } = useColorHook();

  const [inputString, setInputString] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputString(e.target.value);
  const handleColorListChange = () => {
    const list = stringToColorList(inputString);

    let newString = list.join(", ");
    if (newString.length > 0) newString = newString.concat(", ");
    if (inputString !== newString) setInputString(newString);
  };

  const handleEscape = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") handleColorListChange();
  };

  // once typed whitespace, comma, or dot, add the color to the list
  useEffect(() => {
    if (/[\s,\.]$/.test(inputString)) {
      const list = stringToColorList(inputString);
      if (!eqArray(colorList, list)) setColorList(list);
    }
  }, [inputString]);

  return (
    <TextField
      label="hex color codes"
      minRows={2}
      maxRows={10}
      multiline
      variant="filled"
      size="medium"
      value={inputString}
      onKeyUp={handleEscape}
      onChange={handleInputChange}
      onBlur={handleColorListChange}
      sx={{
        "& .MuiInputBase-input": {
          fontFamily: "monospace",
          color: "white",
        },
        "& .MuiInputLabel-root": { color: "#ffffff66" },
        background: "#ffffff22",
        borderRadius: "10px",
      }}
      {...otherProps}
    />
  );
});

export default ColorListTextInput;
