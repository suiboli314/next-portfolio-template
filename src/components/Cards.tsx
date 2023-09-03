import { Box, Typography } from "@mui/material";

type PropType = {
  backColor?: string;
  title?: string;
  children?: React.ReactNode;
};

export default function Card(props: PropType) {
  const { backColor, title, children } = props;

  return (
    <>
      <Box color={backColor}>
        {children}
        <Typography variant="subtitle1" gutterBottom>{title}</Typography>
      </Box>
    </>
  );
}