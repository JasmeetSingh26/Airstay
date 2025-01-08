import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Bind to 0.0.0.0
    port: 5173, // Use the port Render expects
  },
});
