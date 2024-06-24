import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";

/** @package */
export const Header = component$(() => (
	<div
		class={css({
			position: "absolute",
			insetBlockStart: "5vw",
			insetInlineStart: "5vw",
		})}
	>
		<h1
			class={css({
				fontFamily: "Ayer Poster, serif",
				fontWeight: 400,
				fontSize: "min(18vw, 14em)",
				lineHeight: "0.85",
			})}
		>
			LANDING
			<br />
			PAGES —
		</h1>
		<p>In Qwik & React & Three.js —</p>
	</div>
));
