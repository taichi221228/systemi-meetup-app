import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";

/** @package */
export const Footer = component$(() => (
	<div>
		<div
			class={css({
				position: "absolute",
				insetBlockEnd: "5vw",
				insetInlineStart: "5vw",
				inlineSize: "30ch",
				maxInlineSize: "40%",
			})}
		>
			<p>
				A runtime deconstruction of <a href="https://playful.software">playful.software</a>
			</p>
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
			<p>Inspiration and ideas</p>
			<p>Fundamentals</p>
			<p>Finding models</p>
			<p>Preparing them for the web</p>
			<p>Displaying and changing models</p>
			<p>Animation fundamentals</p>
			<p>Effects and making things look good</p>
			<p>Performance and time to load</p>
		</div>
	</div>
));
