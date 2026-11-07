import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          position: "relative",
          backgroundColor: "#080B16",
          color: "#F8FAFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* decorative gradient layers (Satori-safe: single linear-gradient each) */}
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -160,
            width: 640,
            height: 640,
            borderRadius: 999,
            backgroundImage:
              "linear-gradient(135deg, rgba(165,139,255,0.28), rgba(8,11,22,0))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 120,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 999,
            backgroundImage:
              "linear-gradient(315deg, rgba(103,201,255,0.25), rgba(8,11,22,0))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: 280,
            width: 560,
            height: 560,
            borderRadius: 999,
            backgroundImage:
              "linear-gradient(180deg, rgba(168,240,198,0.12), rgba(8,11,22,0))",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#67C9FF",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 22, color: "#AAB4CC", letterSpacing: 2 }}>
            PORTFOLIO
          </div>
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>Abdul Samad</div>
        <div
          style={{
            fontSize: 34,
            marginTop: 18,
            color: "#67C9FF",
            fontWeight: 600,
          }}
        >
          Agentic AI Engineer · Forward Deployed Engineer
        </div>
        <div style={{ fontSize: 22, color: "#AAB4CC", marginTop: 22 }}>
          Multi-Agent Systems · RAG · MCP · Agent Harnesses · Full-Stack · Flutter
        </div>
        <div style={{ fontSize: 18, color: "#6C7792", marginTop: 10 }}>
          {`${profile.location} — ${profile.email}`}
        </div>
        {/* vertical accent bar */}
        <div
          style={{
            position: "absolute",
            right: 72,
            top: 90,
            bottom: 90,
            width: 2,
            backgroundColor: "rgba(103,201,255,0.55)",
          }}
        />
      </div>
    ),
    size
  );
}
