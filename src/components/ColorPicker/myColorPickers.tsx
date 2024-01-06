"use client";

import { memo, useEffect, useState } from "react";
import { Box, Switch, Typography } from "@mui/material";
import { useColorHook } from "@/components/ColorPicker/useColorHook";
import { ColorPicker } from "@/components/ColorPicker/styledColorPicker";
import { Application, defApplication } from "@/utils/colorDistance";

type colorPickerProps = { [x: string | number | symbol]: unknown };
type propTypes = { [x: string | number | symbol]: unknown };

export const UserColorPicker = memo((props: colorPickerProps) => {
  const { ...otherProps } = props;
  const { pickColor, setPickColor, getNearColor } = useColorHook();

  return (
    <>
      <ColorPicker color={pickColor} setColor={setPickColor} isAlphaHidden onBlur={getNearColor} {...otherProps} />
    </>
  );
});

export const ColorimetryControl = memo((props: propTypes) => {
  const { ...otherProps } = props;
  const { getNearColor } = useColorHook();
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

  useEffect(() => {
    defApplication(checked ? Application.Textiles : Application.GraphicArts);
    getNearColor();
  }, [checked]);

  return (
    <>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "Colorimetry Control" }}
        sx={{ "& .MuiSwitch-track ": { background: "#ffffff88" } }}
        {...otherProps}
      />
    </>
  );
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
      <Box display="flex" flexDirection="column" alignItems="start">
        <Typography variant="h6" gutterBottom>
          Nearest Color
        </Typography>
        <NearColorCom />
        <Typography variant="body2" paddingTop=".6em" paddingLeft="1.1em">
          Cie94 Delta-E: {minDelta}
        </Typography>
      </Box>
    )
  );
});
