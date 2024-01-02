"use client";

import { memo } from "react";
import { Box } from "@mui/material";
import { useColorHook } from "@/components/ColorPicker/useColorHook";
import ColorPicker from "@/components/ColorPicker/styledColorPicker";

export const ColorListDisplay = memo(() => {
  const { colorList } = useColorHook();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        padding={{ xs: "0.5rem", md: "1rem" }}
        flex="1"
        flexWrap="wrap"
        justifyItems={{ xs: "center", md: "flex-start" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        {colorList.map((color, index) => (
          <Box boxSizing="border-box" key={index}>
            <ColorPicker color={color} disablePopover />
          </Box>
        ))}
      </Box>
    </>
  );
});
