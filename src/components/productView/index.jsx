import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

const Shoe = () => {
    const { scene } = useGLTF('./scene.gltf')
    const shoeRef = useRef()

    useFrame(() => {
        shoeRef.current.rotation.y += 0.01
    })

    return<primitive ref={shoeRef} object={scene} scale={1}/>
    
}

const ProductView = () => {
    return (
        <Canvas
            style={{
                height: window.innerHeight - 90,
                width: window.innerWidth
            }}
        >
          <OrbitControls/>
          <Stars/>
          <ambientLight intensity={0.5}/>
          <spotLight position={[10 , 15, 10]}  angle={0.3}/>
          <Shoe/>              
        </Canvas>
    )
}

export default ProductView