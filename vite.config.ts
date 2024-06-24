import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((): UserConfig => {
	return {
		plugins: [
			qwikCity({
				rewriteRoutes: [{ paths: { hello: "" } }],
			}),
			qwikVite(),
			tsconfigPaths(),
		],
		server: {
			headers: {
				"Cache-Control": "public, max-age=0",
			},
		},
		preview: {
			headers: {
				"Cache-Control": "public, max-age=600",
			},
		},
	};
});
