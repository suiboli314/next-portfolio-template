import { Box } from "@mui/material";

import ThemeItem from "@/components/themeItem";
import VerticalSidebar, { WIDTH as SIDEBAR_WITH } from "@/components/Navbar/verticalSidebar";
import Intro from "@/components/Introduction";
import Card from "@/components/Cards/Cards";
import ImageMedia from "@/components/ImageContainer/ImageMedia";
import imageByIndex from "@/components/ImageContainer/imageByIndex";

import "./page.css";

export const GLOBAL_WIDTH = `calc(100% - ${SIDEBAR_WITH})`;

export default function Home() {
  return (
    <ThemeItem>
      <VerticalSidebar></VerticalSidebar>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: GLOBAL_WIDTH,
          },
        }}
      >
        <main>
          <Intro />
          <Card title="Book Rating \n share your reviews" bgcolor="#6393c9" flexBasis="50%">
            <ImageMedia src={imageByIndex(1)} alt="abc" />
          </Card>
          <Card title="Book Rating \n share your reviews" bgcolor="Red" flexBasis="50%"></Card>
        </main>
      </Box>
    </ThemeItem>
  );
}
