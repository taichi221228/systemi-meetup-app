import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { css } from "~/styled-system/css";

/** @private */
export default component$(() => {
	return (
		<div
			class={css({
				position: "absolute",
				insetBlockEnd: "50%",
				insetInlineEnd: "0",
				transform: "rotate(90deg) translate3d(50%, 0, 0)",
				transformOrigin: "100%",
			})}
		>
			<input
				type="range"
				min="0"
				max="10"
				step="1"
				value={1}
				onChange$={(e) => {
					// const element = e.target as HTMLInputElement | null;
					// if (element) speed.value = Number(element.value);
				}}
			/>
		</div>
	);
});

/** @private */
export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
