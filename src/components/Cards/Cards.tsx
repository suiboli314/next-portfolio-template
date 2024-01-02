import { Box, Typography } from "@mui/material";

type PropType = {
  bgcolor?: string;
  title?: string;
  children?: React.ReactNode;
  flexBasis?: string;
  [x: string | number | symbol]: unknown;
};

export default function Card(props: PropType) {
  const { bgcolor, title, children, flexBasis, ...otherProps } = props;

  return (
    <>
      <Box bgcolor={bgcolor} flexBasis={flexBasis ?? "100%"} display="flex" {...otherProps}>
        {children}
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
      </Box>
    </>
  );
}