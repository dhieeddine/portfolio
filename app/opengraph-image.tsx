import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dhia Eddine Barhoumi — Software Engineering Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0c0c0c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(10,124,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,124,110,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Teal glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(10,124,110,0.12)",
            display: "flex",
          }}
        />

        {/* Top — name + badge */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(10,124,110,0.15)",
              border: "1px solid rgba(10,124,110,0.4)",
              borderRadius: "100px",
              padding: "8px 20px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#0a7c6e",
                display: "flex",
              }}
            />
            <span style={{ color: "#4ab8a8", fontSize: "18px", fontWeight: 500 }}>
              Available for internships
            </span>
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "80px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              Dhia Eddine
            </span>
            <span
              style={{
                fontSize: "80px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-2px",
                color: "#0a7c6e",
              }}
            >
              Barhoumi
            </span>
          </div>

          {/* Title */}
          <span style={{ fontSize: "26px", color: "#6b7280", fontWeight: 400, marginTop: "4px" }}>
            Software Engineering Student · ENIT, Tunis
          </span>
        </div>

        {/* Bottom — skills + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1,
          }}
        >
          {/* Skill tags */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "800px" }}>
            {[
              "Machine Learning",
              "Computer Vision",
              "Terraform",
              "DevOps",
              "Python",
              "Next.js",
            ].map((skill) => (
              <div
                key={skill}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "#9ca3af",
                  fontSize: "18px",
                  fontFamily: "monospace",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* URL */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#4ab8a8",
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#0a7c6e",
                display: "flex",
              }}
            />
            dhiaeddinebarhoumi.me
          </div>
        </div>

        {/* Bottom teal line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #0a7c6e, #4ab8a8, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
