import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — MERN & React developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #05060a 0%, #0c111c 45%, #041f1c 100%)",
          color: "#e8e9ef",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(94,234,212,0.2)",
              border: "1px solid rgba(94,234,212,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
              color: "#5eead4",
            }}
          >
            MA
          </div>
          <div style={{ fontSize: 22, opacity: 0.85 }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 650,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8", maxWidth: 900 }}>
            Senior MERN full stack developer · React.js · Next.js · Node.js
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <span>Lahore, Pakistan</span>
          <span style={{ color: "#5eead4" }}>asadishfaq100@gmail.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
