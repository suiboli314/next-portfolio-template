import { metadata as rootMetaData } from "@/app/layout";
import { Box } from "@mui/material";
import ColorProvider from "@/components/ColorPicker/useColorHook";
import ColorBackGround from "@/components/ColorPicker/colorBG";
import UsefulTools from "@/components/ColorPicker/usefulTools";

const title = "Color Proximity";
const short_name = "suiboli314";
const description = "A tool to find the closest color in a customized palette.";
const tool_url = "https://suiboli314.vercel.app/colorProximity";

export const metadata = {
  title: title,
  description: description,
  applicationName: short_name,
  keywords: ["color", "palette", "proximity", "tool"],
  manifest: "/manifest_colorProximity.json",
  openGraph: {
    title: title,
    description: description,
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
    url: tool_url,
    images: [
      {
        url: "/og/",
        alt: "avatar",
      },
    ],
  },
  ...rootMetaData,
};

const bgColor = "black";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ColorProvider>
      <ColorBackGround>
        <Box
          display="flex"
          padding={{ xs: "0.5rem", md: "1rem" }}
          width={{ xs: "90%", md: "80%" }}
          flex="1"
          bgcolor={bgColor}
        >
          <main
            style={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {children}
          </main>
        </Box>
        <UsefulTools bgcolor={bgColor} padding={{ xs: "0.5rem", md: "1rem" }} sx={{ opacity: 0.8 }} />
      </ColorBackGround>
    </ColorProvider>
  );
}
