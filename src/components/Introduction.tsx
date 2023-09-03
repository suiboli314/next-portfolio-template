import { Box, Typography } from "@mui/material";

import { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";

import TypeWriter from "@/components/TypeAnimation/TypeWriter";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Intro() {
  return (
    <Box bgcolor={"#a2a3e9"} borderColor={"#a2a3e9"} flexBasis={"100%"}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Typography variant="body1" gutterBottom fontSize={"21px"}>
        As a self-motivated software engineer, I have experience in&nbsp;
      </Typography>
      <Typography variant="body1" gutterBottom fontSize={"21px"} fontFamily={"Monospace"}>
        <TypeWriter
          sequence={[
            "Game Design",
            "AI Design",
            "Full Stack Development",
            "Cyber-security",
          ]}
          infinite
        />
        &nbsp;
      </Typography>
      <Typography variant="body1" gutterBottom fontSize={"21px"}>
        1 year SDE experience, pursuing Master Degree in Computer Science at
        Northeastern University, Teaching Assistant in Algorithm and Computer Vision.
      </Typography>

    </Box>
  );
}