import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    site: "https://foo.bar",
    integrations: [
        starlight({ title: "imgit", titleDelimiter: "•", customCss: ["./src/styles.css"] })
    ]
});
