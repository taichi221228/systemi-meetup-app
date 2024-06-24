import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { VelvetBanana } from "~/components/velvet-banana/velvet-banana";
import { Bananas } from "~/integrations/react/bananas/bananas";
import { css } from "~/styled-system/css";

/** @private */
export default component$(() => {
	return (
		<>
			<Bananas speed={speed.value} />

			<VelvetBanana
				class={css({
					position: "absolute",
					inset: 0,
					margin: "auto",
				})}
			/>

			<div
				class={css({
					position: "absolute",
					insetBlockEnd: "50%",
					insetInlineEnd: "0",
					transform: "rotate(90deg) translate3d(50%, 0, 0)",
					transformOrigin: "100%",
				})}
			>
				<input type="range" min="0" max="10" step="1" value={1} />
			</div>
		</>
	);
});

/** @private */
export const head: DocumentHead = {
	title: "Flying Bananas",
	meta: [
		{
			name: "description",
			content: "This is flying bananas",
		},
	],
};
