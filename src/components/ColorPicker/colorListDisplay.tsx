"use client";

import { memo } from "react";
import { Container } from "@mui/material";
import { useColorHook } from "@/components/ColorPicker/useColorHook";
import ColorPicker from "@/components/ColorPicker/styledColorPicker";

export const ColorListDisplay = memo(() => {
  const { colorList } = useColorHook();

  return (
    <>
      <Container sx={{ alignContent: "stretch" }}>
        {colorList.map((color, index) => (
          <ColorPicker color={color} key={index} disablePopover />
        ))}
      </Container>
    </>
  );
});
