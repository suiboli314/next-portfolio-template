import { Box, Container, Typography } from "@mui/material";
import ColorProvider from "@/components/ColorPicker/useColorHook";
import { ColorListDisplay } from "@/components/ColorPicker/colorListDisplay";
import ColorListTextInput from "@/components/ColorPicker/colorListTextInput";
import { UserColorPicker, NearColor } from "@/components/ColorPicker/myColorPickers";

export default function ColorProximity() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Find Closest Neighbor of Color
      </Typography>
      <ColorProvider>
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
        <Box flexDirection="column" display="flex">
          <Box display="flex" flexDirection="column" marginLeft={0} marginBottom="2rem" alignItems="stretch">
            <Typography variant="h6" gutterBottom flexBasis="100%">
              Color List
            </Typography>
            <ColorListTextInput />
          </Box>
          <ColorListDisplay />
        </Box>
      </ColorProvider>
    </Box>
  );
}
