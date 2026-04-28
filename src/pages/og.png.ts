import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { site } from "../content/site";

const FONTS = {
  ptSerifBold:
    "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/ptserif/PT_Serif-Web-Bold.ttf",
  ptSerifRegular:
    "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/ptserif/PT_Serif-Web-Regular.ttf",
  ptSerifItalic:
    "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/ptserif/PT_Serif-Web-Italic.ttf",
  sacramento:
    "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/sacramento/Sacramento-Regular.ttf",
};

const COLORS = {
  bg1: "#f5f2eb",
  bg2: "#f4e4d8",
  ink: "#1e1914",
  muted: "#6f5f52",
  soft: "#615248",
  accent: "#b85c38",
  rule: "#d8cfc1",
};

async function loadFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load font ${url}: ${res.status}`);
  return res.arrayBuffer();
}

type Node = { type: string; props: Record<string, unknown> };
function h(type: string, props: Record<string, unknown> = {}, ...children: unknown[]): Node {
  const flat = children.flat().filter((c) => c !== null && c !== undefined && c !== false && c !== "");
  const childProp = flat.length === 0 ? undefined : flat.length === 1 ? flat[0] : flat;
  return { type, props: childProp === undefined ? props : { ...props, children: childProp } };
}

export const GET: APIRoute = async () => {
  const [bold, regular, italic, sacramento] = await Promise.all([
    loadFont(FONTS.ptSerifBold),
    loadFont(FONTS.ptSerifRegular),
    loadFont(FONTS.ptSerifItalic),
    loadFont(FONTS.sacramento),
  ]);

  const currentJob = site.experience[0];
  const eyebrowRight = `Portfolio · ${new Date().getFullYear()}`;
  const subtitle = `${site.role} · ${site.location}`;
  const credit = currentJob ? `Currently at ${currentJob.company} · ${currentJob.role}` : "";

  const tree = h(
    "div",
    {
      style: {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 90px",
        background: `linear-gradient(135deg, ${COLORS.bg1} 0%, ${COLORS.bg2} 100%)`,
        fontFamily: "PT Serif",
        color: COLORS.ink,
        position: "relative",
      },
    },
    // Accent bar (left edge)
    h("div", {
      style: {
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: 14,
        background: COLORS.accent,
      },
    }),
    // Eyebrow
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.muted,
        },
      },
      h("div", { style: { display: "flex" } }, "yashrajgupta.com"),
      h("div", { style: { display: "flex" } }, eyebrowRight),
    ),
    // Title block
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: 124,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -2,
            color: COLORS.ink,
          },
        },
        site.name,
      ),
      h("div", {
        style: {
          display: "flex",
          height: 1,
          background: COLORS.rule,
          marginTop: 28,
          marginBottom: 22,
          width: "100%",
        },
      }),
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: 36,
            color: COLORS.soft,
            lineHeight: 1.3,
          },
        },
        subtitle,
      ),
    ),
    // Footer: italic credit + signature
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: 26,
            color: COLORS.muted,
            fontStyle: "italic",
            maxWidth: 600,
          },
        },
        credit,
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontFamily: "Sacramento",
              fontSize: 110,
              color: COLORS.accent,
              lineHeight: 0.9,
            },
          },
          "Yash Raj",
        ),
        h(
          "svg",
          {
            width: 280,
            height: 18,
            viewBox: "0 0 124 12",
            style: { marginTop: 4 },
          },
          h("path", {
            d: "M 2 6 C 22 10, 46 2, 68 6 S 108 4, 122 7",
            fill: "none",
            stroke: COLORS.accent,
            "stroke-width": 1.4,
            "stroke-linecap": "round",
          }),
        ),
      ),
    ),
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "PT Serif", data: bold, weight: 700, style: "normal" },
      { name: "PT Serif", data: regular, weight: 400, style: "normal" },
      { name: "PT Serif", data: italic, weight: 400, style: "italic" },
      { name: "Sacramento", data: sacramento, weight: 400, style: "normal" },
    ],
  });

  const png = new Resvg(svg).render().asPng();

  return new Response(png as BodyInit, {
    headers: { "Content-Type": "image/png" },
  });
};
