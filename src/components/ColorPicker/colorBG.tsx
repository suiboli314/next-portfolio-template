"use client";

import { memo } from "react";
import { Box } from "@mui/material";
import { useColorHook } from "@/components/ColorPicker/useColorHook";

type PropType = {
  children?: React.ReactNode;
  [x: string | number | symbol]: unknown;
};

export const ColorBackGround = memo((props: PropType) => {
  const { children, ...otherProps } = props;
  const { pickColor } = useColorHook();

  return (
    <>
      <Box display="flex" flexGrow={1} justifyContent="center" flexWrap="wrap" minHeight="100vh" bgcolor={pickColor}>
        <Box
          bgcolor="black"
          display="flex"
          flexDirection="column"
          padding={{ xs: "0.5rem", md: "1rem" }}
          maxWidth={{ xs: "90%", md: "80%" }}
          flex="1"
          {...otherProps}
        >
          {children}
        </Box>
      </Box>
    </>
  );
});

export default ColorBackGround;
