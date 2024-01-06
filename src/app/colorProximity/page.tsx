import { Box, Stack, Typography } from "@mui/material";
import { ColorListDisplay } from "@/components/ColorPicker/colorListDisplay";
import ColorListTextInput from "@/components/ColorPicker/colorListTextInput";
import { UserColorPicker, NearColor, ColorimetryControl } from "@/components/ColorPicker/myColorPickers";

export default function ColorProximity() {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Find Closest Neighbor of Color
      </Typography>
      <Box display="flex" flexDirection="row" alignItems="start" marginLeft={0} marginBottom="2rem" gap="1rem">
        <Box display="flex" flexDirection="column" alignItems="start">
          <Typography variant="h6" gutterBottom>
            Your Color
          </Typography>
          <UserColorPicker />
          <Stack direction="row" flexGrow={1} spacing={1} alignItems="center">
            <Typography variant="body2">Textiles</Typography>
            <ColorimetryControl />
            <Typography variant="body2">Graphic Arts</Typography>
          </Stack>
        </Box>
        <NearColor />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h6" gutterBottom flexBasis="100%">
          Color List
        </Typography>
        <ColorListTextInput />
        <ColorListDisplay />
      </Box>
    </>
  );
}
