// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#using-external-data
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx

/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";

const alt = "avatar";
const size = { width: 1200, height: 630 };
// const contentType = "image/png";

export async function GET(request: Request) {
  const { headers } = request;
  const baseURL = headers.get("host");
  const protocol = headers.get("x-forwarded-proto") || "http";
  const absoluteURL = `${protocol}://${baseURL}/avatar.jpg`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width={800}
          height={800}
          src={absoluteURL}
          alt={alt}
          style={{
            borderRadius: 630,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
