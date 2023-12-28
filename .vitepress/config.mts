import { defineConfig } from "vitepress";
import { Plugin } from "imgit/server";
import imgit from "imgit/vite";
import youtube from "imgit/youtube";
import svg from "imgit/svg";

export default defineConfig({
    title: "imgit",
    titleTemplate: ":title • imgit",
    cleanUrls: true,
    appearance: "dark",
    head: [
        ["link", { rel: "icon", href: "/favicon.svg" }],
        ["link", { rel: "preload", href: "/inter.woff2", as: "font", type: "font/woff2", crossorigin: "" }]
    ],
    themeConfig: {
        socialLinks: [{ icon: "github", link: "https://github.com/elringus/imgit-showcase" }],
        nav: [
            { text: "Optimized", link: "/src/optimized" },
            { text: "Unoptimized", link: "/src/unoptimized" }
        ]
    },
    sitemap: { hostname: "https://grand-figolla-604270.netlify.app" },
    vite: { plugins: [imgit({ width: 688, plugins: [svg(), youtube(), skipUnoptimized()] })] }
});

function skipUnoptimized(): Plugin {
    return {
        capture: (_, __, id) => id?.includes("unoptimized.md") ?? false
    };
}
