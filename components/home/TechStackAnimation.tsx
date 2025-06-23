"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export default function TechStackAnimation() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRefs = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.4

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2
    }

    meshRefs.current.forEach((mesh, index) => {
      if (mesh) {
        const offset = (index * (Math.PI * 2)) / 6
        mesh.position.x = Math.cos(time + offset) * 3
        mesh.position.z = Math.sin(time + offset) * 3
        mesh.position.y = Math.sin(time * 2 + offset) * 0.5
        mesh.rotation.x = time + offset
        mesh.rotation.y = time * 0.5 + offset
      }
    })
  })

  const techColors = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#06b6d4"]

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Orbiting tech elements */}
      {techColors.map((color, index) => (
        <mesh key={index} ref={(el) => el && (meshRefs.current[index] = el)} position={[3, 0, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Floating rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.1, 8, 32]} />
        <meshStandardMaterial color="#6366f1" metalness={0.9} roughness={0.1} transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[4.5, 0.08, 8, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} transparent opacity={0.2} />
      </mesh>
    </group>
  )
} 