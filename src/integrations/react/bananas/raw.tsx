/** @jsxImportSource react */

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

import { css } from "~/styled-system/css";

import { Banana } from "./raw/banana";

type Props = {
	speed?: number;
	count?: number;
	depth?: number;
	easing?: (x: number) => number;
};

/** @package */
export const Raw = ({ speed = 1, count = 80, depth = 80, easing = (x: number) => Math.sqrt(1 - (x - 1) ** 2) }: Props) => (
	<div className={css({ position: "fixed", zIndex: -1, inset: 0, animation: "fade 6s normal forwards ease-in-out" })}>
		<Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
			<color attach="background" args={["#ffd863"]} />
			<spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={4} color="yellow" />

			{Array.from({ length: count }, (_, i) => ({ id: i + 1 })).map(({ id }, i) => (
				<Banana key={id} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} />
			))}

			<Environment preset="sunset" />

			<EffectComposer enableNormalPass={false} multisampling={0}>
				<DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
			</EffectComposer>
		</Canvas>
	</div>
);
