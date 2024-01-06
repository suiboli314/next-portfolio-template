import "./globals.css";
import { Viewport, type Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Box } from "@mui/material";

import ThemeItem from "@/components/themeItem";
import VerticalSidebar, { GLOBAL_WIDTH } from "@/components/Navbar/verticalSidebar";

const portfolio_url = "https://suiboli314.vercel.app";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  authors: [{ name: "Chenjie Wu", url: portfolio_url }],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(portfolio_url),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      nocache: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "google", yandex: "yandex", yahoo: "yahoo",
    other: { me: [/* "my-email", */ portfolio_url] },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeItem>
            <VerticalSidebar />
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: GLOBAL_WIDTH,
                },
              }}
            >
              {children}
            </Box>
          </ThemeItem>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
