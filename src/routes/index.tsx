import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { VelvetBanana } from "~/components/velvet-banana/velvet-banana";
import { css } from "~/styled-system/css";

/** @private */
export default component$(() => {
	const speed = useSignal(1);

	return (
		<>
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
				<input
					type="range"
					min="0"
					max="10"
					step="1"
					value={speed.value}
					onInput$={(e) => {
						const element = e.target as HTMLInputElement | null;
						if (element) speed.value = Number(element.value);
					}}
				/>
			</div>
		</>
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
