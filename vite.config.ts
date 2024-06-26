import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { macroPlugin } from "@builder.io/vite-plugin-macro";
import { qwikReact } from "@builder.io/qwik-react/vite";

export default defineConfig((): UserConfig => {
	return {
		plugins: [
			macroPlugin({ preset: "pandacss" }),
			qwikCity({
				rewriteRoutes: [{ paths: { hello: "" } }],
			}),
			qwikVite(),
			tsconfigPaths(),
			qwikReact(),
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
