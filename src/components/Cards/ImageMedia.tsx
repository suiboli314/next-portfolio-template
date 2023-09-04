import { Box } from "@mui/material";
import Image from "next/image";

type PropType = {
  src: string | import("next/dist/shared/lib/get-img-props").StaticImport
  alt: string
};

export default function ImageMedia(props: PropType) {
  const { src, alt } = props;
  
  return (
    <Box flexBasis={"10%"} position={"relative"}>
      <Image 
        src={src}
        fill={true}
        alt={alt}
        objectFit="cover"
        loading="lazy"
      />
    </Box>
  );
}