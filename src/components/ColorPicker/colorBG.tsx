"use client";

import { memo } from "react";
import { Box } from "@mui/material";
import { useColorHook } from "@/components/ColorPicker/useColorHook";
import { GLOBAL_HEIGHT } from "../Navbar/verticalSidebar";

type PropType = {
  children?: React.ReactNode;
  [x: string | number | symbol]: unknown;
};

export const ColorBackGround = memo((props: PropType) => {
  const { children, ...otherProps } = props;
  const { pickColor } = useColorHook();

  return (
    <>
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        alignItems="center"
        flexWrap="wrap"
        minHeight={{
          xs: GLOBAL_HEIGHT,
          md: "100vh",
        }}
        bgcolor={pickColor}
        {...otherProps}
      >
        {children}
      </Box>
    </>
  );
});

export default ColorBackGround;
