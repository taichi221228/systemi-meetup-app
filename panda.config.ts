import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	jsxFramework: "qwik",
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: {
		extend: {
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
	},
	outdir: "src/styled-system",
});
