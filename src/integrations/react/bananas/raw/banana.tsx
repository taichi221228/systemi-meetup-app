/** @jsxImportSource react */

import { Detailed, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type Props = {
	index: number;
	z: number;
	speed: number;
};

/** @package */
export const Banana = ({ index, z, speed }: Props) => {
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
		rX: Math.random() * Math.PI,
		rZ: Math.random() * Math.PI,
		spin: THREE.MathUtils.randFloat(8, 12),
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
