import "./globals.css";
import { Viewport, type Metadata } from "next";
import { Box } from "@mui/material";

import ThemeItem from "@/components/themeItem";
import VerticalSidebar, { WIDTH as SIDEBAR_WITH } from "@/components/Navbar/verticalSidebar";

export const GLOBAL_WIDTH = `calc(100% - ${SIDEBAR_WITH})`;

const title = "Chenjie's Portfolio";
const description = "Personal Homepage built in Next.js";
const portfolio_url = "https://suiboli314.github.io";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["Next.js", "React", "JavaScript", "Chenjie Wu", "Portfolio"],
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
  manifest: "/manifest.json",
  openGraph: {
    title: title,
    description: description,
    url: portfolio_url,
    siteName: title,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/",
        alt: "avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@ChenWuWebDev",
    images: [
      {
        url: "/og/",
        alt: "avatar",
      },
    ],
  },
  verification: {
    // google: "google", yandex: "yandex", yahoo: "yahoo",
    other: { me: [/* "my-email", */ "suiboli314.github.io"] },
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
      <body>
        <ThemeItem>
          <VerticalSidebar></VerticalSidebar>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: GLOBAL_WIDTH,
              },
            }}
          >
            <main>{children}</main>
          </Box>
        </ThemeItem>
      </body>
    </html>
  );
}
