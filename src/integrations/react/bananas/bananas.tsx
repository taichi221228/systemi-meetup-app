import { qwikify$ } from "@builder.io/qwik-react";

import { Raw } from "./raw";

export const Bananas = qwikify$(Raw, { eagerness: "load" });
