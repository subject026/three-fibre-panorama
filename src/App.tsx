import { Suspense } from "react";
import { BackSide, TextureLoader } from "three";

import "./App.css";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

// function Controls(props) {
//   const { camera, gl } = useThree();
//   const ref = useRef<Mesh>(null!);
//   useFrame(() => ref.current.update());
//   return (
//     <orbitControls
//       ref={ref}
//       target={[0, 0, 0]}
//       {...props}
//       args={[camera, gl.domElement]}
//     />
//   );
// }

function Dome() {
  const texture = useLoader(TextureLoader, "/pano_1723447761907.jpg");
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={BackSide} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }} className="canvas">
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        rotateSpeed={-0.5}
      />

      <Suspense fallback={null}>
        <Dome />
      </Suspense>
    </Canvas>
  );
}

export default App;
