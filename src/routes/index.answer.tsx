// import { $, component$, useStore } from "@builder.io/qwik";
// import type { DocumentHead } from "@builder.io/qwik-city";
//
// import { VelvetBanana } from "~/components/velvet-banana/velvet-banana";
// import { Bananas, type BananasProps } from "~/integrations/react/bananas/bananas";
// import { css } from "~/styled-system/css";
//
// type Store = BananasProps;
//
// /** @private */
// export default component$(() => {
// 	const store = useStore<Store>({ speed: 1, count: 80 });
//
// 	return (
// 		<>
// 			<Bananas {...store} />
//
// 			<VelvetBanana
// 				class={css({
// 					position: "absolute",
// 					inset: 0,
// 					margin: "auto",
// 				})}
// 				onClick$={$(() => {
// 					store.count = Math.floor(Math.random() * 100);
// 				})}
// 			/>
//
// 			<div
// 				class={css({
// 					position: "absolute",
// 					insetBlockEnd: "50%",
// 					insetInlineEnd: "0",
// 					transform: "rotate(90deg) translate3d(50%, 0, 0)",
// 					transformOrigin: "100%",
// 				})}
// 			>
// 				<input
// 					type="range"
// 					min="0"
// 					max="10"
// 					step="1"
// 					value={store.speed}
// 					onInput$={(e) => {
// 						if (e.target instanceof HTMLInputElement) store.speed = Number(e.target.value);
// 					}}
// 				/>
// 			</div>
// 		</>
// 	);
// });
//
// /** @private */
// export const head: DocumentHead = {
// 	title: "Flying Bananas",
// 	meta: [
// 		{
// 			name: "description",
// 			content: "This is flying bananas",
// 		},
// 	],
// };
