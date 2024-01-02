"use client";

import { memo } from "react";
import { Box } from "@mui/material";

type PropType = {
  children?: React.ReactNode;
  [x: string | number | symbol]: unknown;
};

export const ColorBackGround = memo((props: PropType) => {
  const { children, ...otherProps } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        padding={{ xs: "0.5rem", md: "1rem" }}
        maxWidth={{ xs: "98%", md: "80%" }}
        flex="1"
        {...otherProps}
      >
        {children}
      </Box>
    </>
  );
});

export default ColorBackGround;
