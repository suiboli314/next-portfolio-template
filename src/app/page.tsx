import ThemeItem from "@/components/themeItem";
import VerticalSidebar from "@/components/Navbar/verticalSidebar";

import Box from "@mui/material/Box";

import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <ThemeItem>
      <VerticalSidebar>{/* <></> */}</VerticalSidebar>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "calc(100% - 64px)",
          },
        }}
      >
        <main style={{ display: "flex" }}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </main>
      </Box>
    </ThemeItem>
  );
}
