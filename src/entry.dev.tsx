import { render, type RenderOptions } from "@builder.io/qwik";

import Root from "./root";

/** @package */
export default function (opts: RenderOptions) {
	return render(document, <Root />, opts);
}
