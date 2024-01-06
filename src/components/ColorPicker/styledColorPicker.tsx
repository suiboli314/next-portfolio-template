import { memo } from "react";
import { MuiColorInput, MuiColorInputFormat } from "mui-color-input";

type ColorPickerProps = {
  color: string;
  setColor?: (newValue: string) => void;
  format?: MuiColorInputFormat;
  [x: string | number | symbol]: unknown;
};

export const ColorPicker = memo((props: ColorPickerProps) => {
  const { color, setColor, format, ...otherProps } = props;

  return (
    <>
      <MuiColorInput
        value={color}
        onChange={(newValue) => {
          if (setColor) setColor(newValue);
        }}
        format={format ?? "hex"}
        sx={{
          "& .MuiOutlinedInput-input": {
            background: "#ffffff22",
            color: "white",
            fontFamily: "monospace",
            fontSize: "1rem",
            width: "4.25em",
            borderRadius: "9999px",
            paddingLeft: "1rem",
          },
          "& .MuiInputAdornment-root": {
            // background: "white", // use background to enable transparent blend mode
            borderRadius: "6px",
            width: "24px",
            height: "24px",
          },
          "& .MuiButton-root": { width: "24px", height: "24px" },
          marginTop: "0.3rem",
          marginBottom: "0.3rem",
        }}
        {...otherProps}
      />
    </>
  );
});

export default ColorPicker;
