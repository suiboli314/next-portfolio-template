import { Box, List, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material";
import Link from "next/link";

type propsType = { [x: string]: any };

export const UsefulTools = (props: propsType) => {
  const { ...otherProps } = props;
  return (
    <>
      <footer style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box
          display="flex"
          flexGrow={1}
          maxWidth={{ xs: "90%", md: "80%" }}
          flexDirection="column"
          alignItems="start"
          position="relative"
          {...otherProps}
        >
          <Link href="#color-list">
            <Typography variant="body2" paddingBottom="1em">
              back to top
            </Typography>
          </Link>
          <List
            sx={{ width: "100%", maxWidth: "fit-content" }}
            disablePadding
            subheader={
              <ListSubheader
                disableGutters
                color="inherit"
                sx={{ textAlign: "start", bgcolor: "inherit", lineHeight: "1.2em" }}
              >
                Useful Tools:
              </ListSubheader>
            }
          >
            {links.map((link, index) => (
              <ListItemButton
                key={index}
                disableGutters
                href={link.url}
                sx={{ ":hover": { opacity: "80%" }, padding: ".3em 1em 0" }}
              >
                <ListItemText primary={link.name} sx={{ margin: 0 }} primaryTypographyProps={{ fontSize: ".85em" }} />
              </ListItemButton>
            ))}
          </List>
          <Typography position="absolute" variant="body2" fontSize=".7em" right="1em" minWidth="fit-content">
            made with ❤️ by <Link href="/">suiboli314</Link>
          </Typography>
        </Box>
      </footer>
    </>
  );
};

const links = [
  { name: "- ColorMine: Professional Color Tools", url: "http://colormine.org/" },
  { name: "- Squoosh: Image Compressor by Google", url: "https://squoosh.app/" },
  { name: "- SVGOMG: SVG Optimizer", url: "https://jakearchibald.github.io/svgomg/" },
];

export default UsefulTools;
