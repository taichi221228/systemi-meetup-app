import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { css } from "~/styled-system/css";

/** @private */
export default component$(() => {
	return (
		<>
			<div
				class={css({
					fontFamily: "Inter",
					fontSize: "16px",
				})}
			>
				<div
					class={css({
						position: "absolute",
						insetBlockStart: "5vw",
						insetInlineStart: "5vw",
					})}
				>
					<h1
						class={css({
							marginInlineEnd: "0.05em",
							fontFamily: "Ayer Poster, serif",
							fontWeight: 400,
							fontSize: "min(18vw, 14em)",
							lineHeight: "0.85em",
						})}
					>
						LANDING
						<br />
						PAGES —
					</h1>
					<p>In Qwik & React & Three.js —</p>
				</div>
				<div
					class={css({
						position: "absolute",
						insetBlockEnd: "5vw",
						insetInlineStart: "5vw",
						inlineSize: "30ch",
						maxInlineSize: "40%",
					})}
				>
					A runtime deconstruction of <a href="https://playful.software">playful.software</a>
				</div>
				<div
					class={css({
						position: "absolute",
						insetBlockEnd: "5vw",
						insetInlineEnd: "5vw",
						inlineSize: "35ch",
						maxInlineSize: "40%",
						lineHeight: "1em",
						letterSpacing: "-0.01em",
						textAlign: "right",
					})}
				>
					Inspiration and ideas
					<br />
					Fundamentals
					<br />
					Finding models
					<br />
					Preparing them for the web
					<br />
					Displaying and changing models
					<br />
					Animation fundamentals
					<br />
					Effects and making things look good
					<br />
					Performance and time to load
				</div>
			</div>
			<div
				class={css({
					position: "absolute",
					insetBlockEnd: "50%",
					insetInlineEnd: "5vw",
					fontFamily: "Inter",
					fontWeight: 400,
					lineHeight: "1em",
					letterSpacing: "-0.01em",
					fontSize: "12px",
					transform: "rotate(90deg) translate3d(50%, 0, 0)",
					transformOrigin: "100% 50%",
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
