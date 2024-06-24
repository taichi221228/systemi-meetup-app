import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";

/** @package */
export const Footer = component$(() => (
	<footer
		class={css({
			display: "grid",
			gridTemplateColumns: "repeat(2, 1fr)",
		})}
	>
		<p>
			A runtime deconstruction of <a href="https://playful.software">playful.software</a>
		</p>
		<div
			class={css({
				lineHeight: "1",
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
	</footer>
));
