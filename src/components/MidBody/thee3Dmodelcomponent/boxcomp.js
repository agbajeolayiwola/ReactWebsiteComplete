import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF  } from '@react-three/drei'
import {proxy, useSnapshot} from 'valtio';

const state = proxy({
  current: null,
  items: {
    mesh: '#426cb4'
  }
});


export default function TroniclabLogo(props) {
  const group = useRef()
 // const [state, setState] = useState({isHovered: false, isActive: false})
  const snap = useSnapshot(state)
  const { nodes } = useGLTF('/TroniclabLogo.glb')

   // Animate model
   useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    group.current.rotation.x = Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  
  return (
    <group ref={group} {...props} dispose={null}>
    
      <mesh
        material-color={snap.items.mesh}
        geometry={nodes.Gift_Item_V1.geometry}
        material={nodes.Gift_Item_V1.material}
        position={[-84, -9, -82]}
        scale={[0.07, 0.07, 0.07]}
      />
    </group>
  )
}
useGLTF.preload('/TroniclabLogo.glb')  