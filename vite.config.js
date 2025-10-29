import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  // load env variables for the current mode (only keys starting with VITE_)
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const secret = env.VITE_MOCKAPI_SECRET;

  return {
    plugins: [vue(), vueDevTools()],
    server: {
      proxy: {
        "/api": {
          target: `https://${secret}.mockapi.io/jobs`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
