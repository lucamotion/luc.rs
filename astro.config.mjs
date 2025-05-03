import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  integrations: [react()]
});
