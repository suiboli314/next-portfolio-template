import { Box } from "@mui/material";
import { GLOBAL_WIDTH } from "@/components/Navbar/verticalSidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box maxWidth={GLOBAL_WIDTH} padding="2rem">
        {children}
      </Box>
    </>
  );
}
