import { Box, Typography } from "@mui/material";
import ColorProvider from "@/components/ColorPicker/useColorHook";
import ColorBackGround from "@/components/ColorPicker/colorBG";
import { ColorListDisplay } from "@/components/ColorPicker/colorListDisplay";
import ColorListTextInput from "@/components/ColorPicker/colorListTextInput";
import { UserColorPicker, NearColor } from "@/components/ColorPicker/myColorPickers";

export default function ColorProximity() {
  return (
    <ColorProvider>
      <ColorBackGround>
        <Typography variant="h2" gutterBottom>
          Find Closest Neighbor of Color
        </Typography>

        <Box
          flexDirection="row"
          display="flex"
          marginLeft={0}
          marginBottom="2rem"
          gap="1rem"
          justifyItems="start"
          alignItems="flex-start"
          alignContent="flex-start"
          justifyContent="flex-start"
        >
          <Box display="flex" flexDirection="column" marginLeft={0} sx={{ placeItems: "start", placeContent: "start" }}>
            <Typography variant="h6" gutterBottom>
              Your Color
            </Typography>
            <UserColorPicker />
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
      </ColorBackGround>
    </ColorProvider>
  );
}
