import type { APIRoute } from "astro";
import { generateOpenGraphImage } from "astro-og-canvas";
import { site } from "../content/site";

export const GET: APIRoute = async () => {
  const png = await generateOpenGraphImage({
    title: site.name,
    description: `${site.role} · ${site.location}`,
    bgGradient: [
      [245, 242, 235],
      [244, 228, 216],
    ],
    border: {
      color: [184, 92, 56],
      width: 14,
      side: "inline-start",
    },
    padding: 90,
    font: {
      title: {
        color: [30, 25, 20],
        size: 110,
        weight: "Bold",
        families: ["PT Serif"],
        lineHeight: 1.04,
      },
      description: {
        color: [97, 84, 74],
        size: 38,
        weight: "Normal",
        families: ["PT Serif"],
        lineHeight: 1.3,
      },
    },
    fonts: [
      "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/ptserif/PT_Serif-Web-Bold.ttf",
      "https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/ptserif/PT_Serif-Web-Regular.ttf",
    ],
  });

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
