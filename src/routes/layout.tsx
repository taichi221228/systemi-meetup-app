import "@fontsource-variable/inter";

import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { css } from "~/styled-system/css";

import { Footer } from "./layout/footer";
import { Header } from "./layout/header";

/** @private */
export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	});
};

/** @private */
export default component$(() => {
	return (
		<div class={css({ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", blockSize: "100%" })}>
			<Header />
			<Slot />
			<Footer />
		</div>
	);
});
