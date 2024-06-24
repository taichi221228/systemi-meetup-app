import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";

export const Header = component$(() => (
	<header>
		<h1
			class={css({
				fontFamily: "Ayer Poster, serif",
				fontWeight: 400,
				fontSize: "124px",
				lineHeight: "0.85",
			})}
		>
			FLYING
			<br />
			BANANAS —
		</h1>
		<p>In Qwik & React & Three.js —</p>
	</header>
));
