import { Box } from "@mui/material";

import ThemeItem from "@/components/themeItem";
import VerticalSidebar from "@/components/Navbar/verticalSidebar";

import "./page.css";
import Intro from "@/components/Introduction";

export const GLOBAL_WIDTH = "calc(100% - 64px)";

export default function Home() {
  return (
    <ThemeItem>
      <VerticalSidebar>{/* <></> */}</VerticalSidebar>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: GLOBAL_WIDTH,
          }
        }}
      >
        <main>
          <Intro/>

        </main>
      </Box>
      
    </ThemeItem>
  );
}
