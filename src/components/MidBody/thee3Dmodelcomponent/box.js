import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import TroniclabLogo from './boxcomp';
import {OrbitControls, Stars, ContactShadows, Environment} from '@react-three/drei';




export default function Sample() {
    

    return (
        <div>
        <Canvas  shadows dpr={[1, 2]} camera={{ fov: 50}} 
        style={{height:'400px', 
        backgroundColor: 'white', 
        borderRadius:'20px' }}>
            <Stars
              radius={200} // Radius of the inner sphere (default=100)
              depth={40} // Depth of area where stars should fit (default=50)
              count={20000} // Amount of stars (default=5000)
              factor={4} // Size factor (default=4)
              saturation={4} // Saturation 0-1 (default=0)
            />
                <ambientLight intensity={0.0} />
                <spotLight position={[5, 20, 20]} intensity={0.3} angle={0.15} penumbra={1} castShadow/>
                <pointLight position={[5, 20, 20]} angle={0.45}/>
                <Environment preset="city" />
                <Suspense fallback={null}>
                <TroniclabLogo  position={[-4, -5, -15]} scale={[3,3,3]}/>
                <Environment  files='christmas_photo_studio_04_1k.hdr' fallback={null} />
                <ContactShadows
                opacity={1}
                width={1}
                height={1}
                blur={3} // Amount of blue (default=1)
                far={10} // Focal distance (default=10)
                resolution={256} // Rendertarget resolution (default=256)
                />
                </Suspense>
                <OrbitControls 
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2} 
                enableZoom={true} 
                enablePan={true} />
        </Canvas>
        </div>
    )
}
