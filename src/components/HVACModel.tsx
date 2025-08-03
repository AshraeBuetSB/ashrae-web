import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Cylinder, Sphere, Torus, Cone, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Animated airflow particles
function AirflowParticles({ path, color, speed = 1 }: { path: THREE.Vector3[], color: string, speed?: number }) {
  const particlesRef = useRef<THREE.Points>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  useFrame((state) => {
    if (particlesRef.current && path.length > 1) {
      const time = state.clock.elapsedTime * speed;
      
      for (let i = 0; i < particleCount; i++) {
        const progress = ((time + i * 0.1) % (path.length - 1)) / (path.length - 1);
        const segmentIndex = Math.floor(progress * (path.length - 1));
        const segmentProgress = (progress * (path.length - 1)) % 1;
        
        if (segmentIndex < path.length - 1) {
          const start = path[segmentIndex];
          const end = path[segmentIndex + 1];
          
          positions[i * 3] = start.x + (end.x - start.x) * segmentProgress;
          positions[i * 3 + 1] = start.y + (end.y - start.y) * segmentProgress;
          positions[i * 3 + 2] = start.z + (end.z - start.z) * segmentProgress;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} transparent opacity={0.8} />
    </points>
  );
}

// Compressor component
function Compressor({ position, isActive }: { position: [number, number, number], isActive: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const fanRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (fanRef.current && isActive) {
      fanRef.current.rotation.z += 0.2;
    }
    if (meshRef.current) {
      meshRef.current.material.emissive.setHex(isActive ? 0x001122 : 0x000000);
    }
  });

  return (
    <group position={position}>
      <RoundedBox ref={meshRef} args={[1.2, 1.5, 1.2]} radius={0.1}>
        <meshStandardMaterial color={isActive ? "#2563eb" : "#64748b"} metalness={0.7} roughness={0.3} />
      </RoundedBox>
      
      {/* Compressor fan */}
      <group ref={fanRef} position={[0, 0.8, 0]}>
        <Cylinder args={[0.4, 0.4, 0.05]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
        </Cylinder>
        {[0, 1, 2, 3].map((i) => (
          <Box key={i} args={[0.6, 0.05, 0.02]} rotation={[0, 0, (Math.PI / 2) * i]} position={[0, 0, 0.03]}>
            <meshStandardMaterial color="#374151" metalness={0.6} roughness={0.4} />
          </Box>
        ))}
      </group>
      
      <Text
        position={[0, -1, 0]}
        fontSize={0.15}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
      >
        Compressor
      </Text>
    </group>
  );
}

// Evaporator coils
function Evaporator({ position }: { position: [number, number, number] }) {
  const coilsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (coilsRef.current) {
      coilsRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.material.emissive.setHex(
            Math.sin(state.clock.elapsedTime * 2 + index * 0.5) > 0 ? 0x001144 : 0x000000
          );
        }
      });
    }
  });

  return (
    <group position={position}>
      <group ref={coilsRef}>
        {/* Evaporator coils */}
        {[0, 1, 2, 3].map((i) => (
          <Torus key={i} args={[0.6, 0.08]} position={[0, i * 0.3 - 0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
          </Torus>
        ))}
      </group>
      
      {/* Evaporator fan */}
      <Cylinder args={[0.3, 0.3, 0.05]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
      >
        Evaporator
      </Text>
    </group>
  );
}

// Condenser coils
function Condenser({ position }: { position: [number, number, number] }) {
  const coilsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (coilsRef.current) {
      coilsRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.material.emissive.setHex(
            Math.sin(state.clock.elapsedTime * 1.5 + index * 0.3) > 0 ? 0x441100 : 0x000000
          );
        }
      });
    }
  });

  return (
    <group position={position}>
      <group ref={coilsRef}>
        {/* Condenser coils */}
        {[0, 1, 2, 3, 4].map((i) => (
          <Torus key={i} args={[0.5, 0.06]} position={[0, i * 0.25 - 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
          </Torus>
        ))}
      </group>
      
      {/* Condenser fan */}
      <Cylinder args={[0.4, 0.4, 0.05]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
      </Cylinder>
      
      <Text
        position={[0, -0.9, 0]}
        fontSize={0.15}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
      >
        Condenser
      </Text>
    </group>
  );
}

// Expansion valve
function ExpansionValve({ position }: { position: [number, number, number] }) {
  const valveRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (valveRef.current) {
      valveRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group position={position}>
      <Cone ref={valveRef} args={[0.2, 0.6]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.4} />
      </Cone>
      <Cylinder args={[0.05, 0.05, 0.4]} position={[-0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.4]} position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.12}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
      >
        Expansion Valve
      </Text>
    </group>
  );
}

// Refrigerator cabinet
function RefrigeratorCabinet({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Main cabinet */}
      <RoundedBox args={[2, 4, 1.5]} radius={0.1}>
        <meshStandardMaterial color="#f8fafc" metalness={0.1} roughness={0.8} transparent opacity={0.3} />
      </RoundedBox>
      
      {/* Freezer compartment */}
      <RoundedBox args={[1.8, 1.2, 1.3]} position={[0, 1.2, 0]} radius={0.05}>
        <meshStandardMaterial color="#dbeafe" metalness={0.1} roughness={0.9} transparent opacity={0.5} />
      </RoundedBox>
      
      {/* Fresh food compartment */}
      <RoundedBox args={[1.8, 2.4, 1.3]} position={[0, -0.6, 0]} radius={0.05}>
        <meshStandardMaterial color="#dcfce7" metalness={0.1} roughness={0.9} transparent opacity={0.5} />
      </RoundedBox>
      
      {/* Door handles */}
      <Cylinder args={[0.03, 0.03, 0.3]} position={[0.9, 1.2, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 0.3]} position={[0.9, -0.6, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.2}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
      >
        Refrigerator
      </Text>
    </group>
  );
}

// Control panel
function ControlPanel({ onToggleSystem }: { onToggleSystem: () => void }) {
  const [isActive, setIsActive] = useState(true);
  
  const handleToggle = () => {
    setIsActive(!isActive);
    onToggleSystem();
  };

  return (
    <group position={[-4, 2, 2]}>
      <RoundedBox args={[1, 1.5, 0.2]} radius={0.05}>
        <meshStandardMaterial color="#1f2937" metalness={0.3} roughness={0.7} />
      </RoundedBox>
      
      {/* Power button */}
      <Cylinder 
        args={[0.15, 0.15, 0.05]} 
        position={[0, 0.3, 0.15]}
        onClick={handleToggle}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <meshStandardMaterial color={isActive ? "#10b981" : "#ef4444"} emissive={isActive ? "#065f46" : "#7f1d1d"} />
      </Cylinder>
      
      {/* Temperature display */}
      <RoundedBox args={[0.6, 0.3, 0.05]} position={[0, -0.2, 0.15]} radius={0.02}>
        <meshStandardMaterial color="#000000" />
      </RoundedBox>
      
      <Text
        position={[0, -0.2, 0.2]}
        fontSize={0.08}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
        {isActive ? "4°C" : "OFF"}
      </Text>
      
      <Text
        position={[0, -1, 0]}
        fontSize={0.12}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
      >
        Control Panel
      </Text>
    </group>
  );
}

function RefrigerationScene() {
  const [systemActive, setSystemActive] = useState(true);
  
  // Define refrigeration cycle path
  const refrigerationPath = [
    new THREE.Vector3(-2, 0, 0),    // Compressor
    new THREE.Vector3(-1, 2, 0),    // To condenser
    new THREE.Vector3(2, 2, 0),     // Condenser
    new THREE.Vector3(3, 0, 0),     // To expansion valve
    new THREE.Vector3(2, -2, 0),    // Expansion valve
    new THREE.Vector3(-1, -2, 0),   // To evaporator
    new THREE.Vector3(-2, 0, 0),    // Back to compressor
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, 5, 5]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[5, -5, 5]} intensity={0.5} color="#ef4444" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
      
      {/* Main components */}
      <Compressor position={[-2, 0, 0]} isActive={systemActive} />
      <Condenser position={[2, 2, 0]} />
      <ExpansionValve position={[2, -2, 0]} />
      <Evaporator position={[-2, -2, 0]} />
      <RefrigeratorCabinet position={[0, 0, -3]} />
      <ControlPanel onToggleSystem={() => setSystemActive(!systemActive)} />
      
      {/* Refrigerant flow visualization */}
      {systemActive && (
        <>
          <AirflowParticles path={refrigerationPath} color="#60a5fa" speed={1} />
          <AirflowParticles path={refrigerationPath} color="#3b82f6" speed={0.8} />
        </>
      )}
      
      {/* Connecting pipes */}
      <Cylinder args={[0.05, 0.05, 2.5]} position={[-0.5, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 2]} position={[2.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 2.5]} position={[0.5, -2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 2]} position={[-2, -1, 0]}>
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Floor */}
      <RoundedBox args={[12, 0.2, 8]} position={[0, -4, 0]} radius={0.1}>
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.9} />
      </RoundedBox>
      
      {/* Information labels */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.3}
        color="#1f2937"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        Refrigeration Cycle
      </Text>
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 1.8}
        minDistance={8}
        maxDistance={25}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function HVACModel() {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
      <Canvas camera={{ position: [12, 8, 12], fov: 50 }}>
        <RefrigerationScene />
      </Canvas>
      
      {/* Enhanced UI overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/30">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Interactive Refrigeration System</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p>🔄 <strong>Drag:</strong> Rotate view</p>
          <p>🔍 <strong>Scroll:</strong> Zoom in/out</p>
          <p>⚡ <strong>Click:</strong> Power button to control system</p>
          <p>🌡️ <strong>Watch:</strong> Refrigerant flow animation</p>
        </div>
      </div>
      
      {/* Component legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/30">
        <h4 className="text-md font-bold text-gray-800 mb-2">Components</h4>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Compressor</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Condenser</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span>Expansion Valve</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-500 rounded"></div>
            <span>Evaporator</span>
          </div>
        </div>
      </div>
      
      {/* Performance indicator */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        High Performance 3D Model
      </div>
    </div>
  );
}