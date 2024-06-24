import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan"; // eslint-disable-line import/no-unresolved

import render from "./entry.ssr";

/** @package */
export default createQwikCity({ render, qwikCityPlan });
