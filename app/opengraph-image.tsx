import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Zentreks Consulting - Strategic Consulting Since 2008";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a2e 50%, #0D0D0D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(201, 169, 97, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(30, 58, 95, 0.1) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Logo container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {/* Logo image */}
          <img
            src="https://zentreks-consulting-v3.vercel.app/images/zentreks-logo.png"
            alt="Zentreks"
            width={500}
            height={224}
            style={{
              objectFit: "contain",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <p
              style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "0.05em",
              }}
            >
              Strategic Consulting Since 2008
            </p>
            <p
              style={{
                fontSize: "20px",
                color: "#C9A961",
                margin: 0,
              }}
            >
              AI Integration • Strategy • Digital Transformation
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #C9A961, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
