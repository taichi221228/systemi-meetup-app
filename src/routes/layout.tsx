import "@fontsource-variable/inter";

import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { css } from "~/styled-system/css";

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
		<div
			class={css({
				position: "relative",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				blockSize: "100%",
				maxInlineSize: "1280px",
				marginInline: "auto",
			})}
		>
			<Header />
			<Slot />
			<Footer />
		</div>
	);
});
