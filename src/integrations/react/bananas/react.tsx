/** @jsxImportSource react */

import { useGLTF, Detailed, Environment } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import * as THREE from "three";

import { css } from "~/styled-system/css";

const Banana = ({
	index,
	z,
	speed,
}: {
	index: number;
	z: number;
	speed: number;
}) => {
	const ref = useRef<THREE.LOD>(null);
	const { viewport, camera } = useThree();
	const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
	const { nodes, materials } = useGLTF("/banana-v1-transformed.glb") as unknown as {
		nodes: {
			banana_high: THREE.Mesh;
			banana_mid: THREE.Mesh;
			banana_low: THREE.Mesh;
		};
		materials: {
			skin: THREE.Material;
		};
	};

	const [data] = useState({
		y: THREE.MathUtils.randFloatSpread(height * 2),
		x: THREE.MathUtils.randFloatSpread(2),
		spin: THREE.MathUtils.randFloat(8, 12),
		rX: Math.random() * Math.PI,
		rZ: Math.random() * Math.PI,
	});

	useFrame((state, dt) => {
		if (!ref.current) return;

		if (dt < 0.1) {
			data.y += dt * speed;
			ref.current.position.set(index === 0 ? 0 : data.x * width, data.y, -z);
		}

		data.rX += dt / data.spin;
		data.rZ += dt / data.spin;
		ref.current.rotation.set(data.rX, Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, data.rZ);

		if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1));
	});

	return (
		<Detailed ref={ref} distances={[0, 65, 80]}>
			<mesh geometry={nodes.banana_high.geometry} material={materials.skin} material-emissive="#ff9f00" />
			<mesh geometry={nodes.banana_mid.geometry} material={materials.skin} material-emissive="#ff9f00" />
			<mesh geometry={nodes.banana_low.geometry} material={materials.skin} material-emissive="#ff9f00" />
		</Detailed>
	);
};

/** @package */
export const bananas = ({ speed = 1, count = 80, depth = 80, easing = (x: number) => Math.sqrt(1 - (x - 1) ** 2) }) => (
	<div className={css({ position: "fixed", zIndex: -1, inset: 0 })}>
		<Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
			<color attach="background" args={["#ffd863"]} />
			<spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={4} color="yellow" />

			{Array.from({ length: count }, (_, i) => (
				<Banana key={crypto.randomUUID()} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} />
			))}

			<Environment preset="sunset" />

			<EffectComposer enableNormalPass={false} multisampling={0}>
				<DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
			</EffectComposer>
		</Canvas>
	</div>
);
