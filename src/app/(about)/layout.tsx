import { metadata as rootMetaData } from "@/app/layout";

const title = "Chenjie's Portfolio";
const description = "Personal Homepage built in Next.js";
const portfolio_url = "https://suiboli314.vercel.app";

export const metadata = {
  title: title,
  description: description,
  applicationName: title,
  keywords: ["Next.js", "React", "JavaScript", "Chenjie Wu", "Portfolio"],
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
  ...rootMetaData,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {children}
    </main>
  );
}
