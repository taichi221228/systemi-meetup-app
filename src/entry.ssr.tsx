import { renderToStream, type RenderToStreamOptions } from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest"; // eslint-disable-line import/no-unresolved

import Root from "./root";

/** @package */
export default function (opts: RenderToStreamOptions) {
	return renderToStream(<Root />, {
		manifest,
		...opts,
		containerAttributes: {
			lang: "en-us",
			...opts.containerAttributes,
		},
		serverData: {
			...opts.serverData,
		},
	});
}
