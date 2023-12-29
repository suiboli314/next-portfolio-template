"use client";

import { memo } from "react";
import { Container, Typography } from "@mui/material";
import { useColorHook } from "@/components/ColorPicker/useColorHook";
import { ColorPicker } from "@/components/ColorPicker/styledColorPicker";

type colorPickerProps = { [x: string | number | symbol]: unknown };

export const UserColorPicker = memo((props: colorPickerProps) => {
  const { ...otherProps } = props;
  const { pickColor, setPickColor, getNearColor } = useColorHook();

  return <ColorPicker color={pickColor} setColor={setPickColor} isAlphaHidden onBlur={getNearColor} {...otherProps} />;
});

const NearColorCom = memo((props: colorPickerProps) => {
  const { ...otherProps } = props;
  const { nearColor } = useColorHook();

  return <ColorPicker color={nearColor} disablePopover {...otherProps} />;
});

export const NearColor = memo(() => {
  const { minDelta } = useColorHook();

  return (
    minDelta !== 0 && (
      <Container>
        <Typography variant="h6" gutterBottom>
          Nearest Color {`: ${minDelta}`}
        </Typography>
        <NearColorCom />
      </Container>
    )
  );
});
