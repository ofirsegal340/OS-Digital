import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "OS Digital — קידום ממומן לעסקים קטנים ובינוניים בישראל";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0E1A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(180,79,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Glowing ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            border: "1px solid rgba(0,212,255,0.12)",
            transform: "translate(-50%, -50%)",
            boxShadow:
              "0 0 60px rgba(0,212,255,0.06), inset 0 0 60px rgba(0,212,255,0.03)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-2px",
            }}
          >
            OS
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#00D4FF",
              letterSpacing: "-2px",
            }}
          >
            Digital
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          קידום ממומן שמביא תוצאות לעסקים
        </div>

        {/* Gradient line */}
        <div
          style={{
            marginTop: "40px",
            width: "200px",
            height: "3px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #00D4FF, #B44FFF)",
          }}
        />

        {/* Platform names */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>Facebook</span>
          <span>|</span>
          <span>Google</span>
          <span>|</span>
          <span>Instagram</span>
          <span>|</span>
          <span>TikTok</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
