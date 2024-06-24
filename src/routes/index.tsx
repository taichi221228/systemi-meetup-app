import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

/** @private */
export default component$(() => {
	return (
		<>
			<h1>Hi 👋</h1>
			<div>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
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
