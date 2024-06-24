import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import "@fontsource-variable/inter";
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
		<>
			<Header />
			<Slot />
		</>
	);
});
