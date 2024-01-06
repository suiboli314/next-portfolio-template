import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import Navpages from "./navpages";

export const SIDEBAR_WITH = "4rem";
export const GLOBAL_WIDTH = `calc(100% - ${SIDEBAR_WITH})`;
export const TOPBAR_HEIGHT = "56px";
export const GLOBAL_HEIGHT = `calc(100vh - ${TOPBAR_HEIGHT})`;

export default function VerticalSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        height: { md: "100vh" },
        width: { md: SIDEBAR_WITH },
        position: { md: "fixed" },
        right: { md: 0 },
        display: "flex",
      }}
    >
      <AppBar position="static" sx={{ height: { md: "100%" }, flexDirection: { md: "column" } }}>
        <Toolbar sx={{ flexDirection: { md: "column" } }} disableGutters>
          <Navpages maxWidth={SIDEBAR_WITH} maxHeight={TOPBAR_HEIGHT} />
          <Box flexGrow={0}>
            <Tooltip title="avatar icon">
              <Avatar alt="Chen" src="/icon.png" />
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
