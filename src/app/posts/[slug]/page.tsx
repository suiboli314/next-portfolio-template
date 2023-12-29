import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Page() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom flexBasis={"100%"}>
        Sample Page
      </Typography>
      <Image src="/../../icon.png" alt="" width="300" height="300" />
    </Box>
  );
}
