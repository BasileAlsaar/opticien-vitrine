import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Maison Lestrange — Opticien indépendant, Paris VII";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const IVORY = "#f5f1ea";
const INK = "#1a1a1a";
const ACCENT = "#8b3a2e";
const LINE = "#d9d2c5";

export default async function OGImage() {
  const [frauncesLight, frauncesItalic] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/Fraunces-Light.ttf")),
    readFile(join(process.cwd(), "src/assets/Fraunces-LightItalic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: IVORY,
          padding: "72px 80px",
          color: INK,
          fontFamily: "Fraunces",
          position: "relative",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#4a4a4a",
            fontFamily: "Fraunces",
          }}
        >
          <span>Opticien indépendant</span>
          <span>Paris · VII</span>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 96,
            lineHeight: 0.95,
          }}
        >
          <span
            style={{
              fontSize: 132,
              letterSpacing: "-0.03em",
              fontWeight: 300,
              color: INK,
            }}
          >
            L&apos;art de
          </span>
          <span
            style={{
              fontSize: 132,
              letterSpacing: "-0.03em",
              fontWeight: 300,
              fontStyle: "italic",
              color: ACCENT,
              marginTop: 10,
            }}
          >
            bien voir.
          </span>
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 26,
            color: "#4a4a4a",
            maxWidth: 740,
            lineHeight: 1.4,
            fontFamily: "Fraunces",
          }}
        >
          Une sélection éditoriale de montures, un examen mené sans
          précipitation.
        </div>

        {/* Bottom row */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 64,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          <span
            style={{
              fontSize: 40,
              letterSpacing: "-0.02em",
              fontWeight: 300,
            }}
          >
            Maison{" "}
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>
              Lestrange
            </span>
          </span>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#4a4a4a",
              fontFamily: "Fraunces",
            }}
          >
            maison-lestrange.fr
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesLight,
          weight: 300,
          style: "normal",
        },
        {
          name: "Fraunces",
          data: frauncesItalic,
          weight: 300,
          style: "italic",
        },
      ],
    },
  );
}
