import { Box, Typography } from "@mui/material";

type PropType = {
  bgcolor?: string;
  title?: string;
  children?: React.ReactNode;
  flexBasis?: string 
};

export default function Card(props: PropType) {
  const { bgcolor, title, children } = props;

  let { flexBasis } = props;

  if (!flexBasis) flexBasis = "100%";

  return (
    <>
      <Box bgcolor={bgcolor} flexBasis={flexBasis} display={"flex"}>
        {children}
        <Typography variant="subtitle1" gutterBottom>{title}</Typography>
      </Box>
    </>
  );
}