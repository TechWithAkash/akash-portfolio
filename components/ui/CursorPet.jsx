"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorPet() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isSitting, setIsSitting] = useState(true);
  const [direction, setDirection] = useState("right"); // "left" or "right"
  
  const mouseRef = useRef({ x: -100, y: -100 });
  const petRef = useRef({ x: -100, y: -100 });
  const lastMoveTime = useRef(Date.now());
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Avoid running on mobile touch screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Set initial position on first mouse move to avoid teleports
    let hasMoved = false;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
      setIsSitting(false);
      
      if (!hasMoved) {
        petRef.current = { x: e.clientX, y: e.clientY + 18 };
        hasMoved = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Lerp update loop for smooth trailing
    const updatePetPosition = () => {
      const targetX = mouseRef.current.x;
      // Shift offset down and right so pet doesn't overlap mouse clicks
      const targetY = mouseRef.current.y + 18; 

      const dx = targetX - petRef.current.x;
      const dy = targetY - petRef.current.y;
      
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Determine horizontal direction
      if (dx > 2) {
        setDirection("right");
      } else if (dx < -2) {
        setDirection("left");
      }

      // Smooth Lerping Factor
      const lerpFactor = 0.08;
      
      if (distance > 6) {
        petRef.current.x += dx * lerpFactor;
        petRef.current.y += dy * lerpFactor;
        setPosition({ x: petRef.current.x, y: petRef.current.y });
        setIsSitting(false);
      } else {
        // If we are close enough, check time since last movement to toggle sitting
        if (Date.now() - lastMoveTime.current > 300) {
          setIsSitting(true);
        }
      }

      animationFrameId.current = requestAnimationFrame(updatePetPosition);
    };

    animationFrameId.current = requestAnimationFrame(updatePetPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  if (position.x === -100) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scaleX(${direction === "left" ? -1 : 1})`,
        pointerEvents: "none",
        zIndex: 99999,
        transition: "transform 0.03s linear",
      }}
      className="flex items-center justify-center w-8 h-8 select-none"
    >
      {isSitting ? (
        /* Cute Sitting Pixel Puppy SVG */
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="currentColor" 
          className="text-amber-600 dark:text-amber-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
        >
          {/* Head */}
          <rect x="10" y="8" width="10" height="10" />
          {/* Snout */}
          <rect x="18" y="12" width="4" height="4" fill="#F59E0B" />
          <rect x="20" y="12" width="2" height="2" fill="#000" />
          {/* Eyes */}
          <rect x="14" y="10" width="2" height="2" fill="#000" />
          {/* Ears */}
          <rect x="8" y="6" width="3" height="6" fill="#78350F" />
          {/* Collar */}
          <rect x="10" y="17" width="10" height="2" fill="#EF4444" />
          {/* Body sitting */}
          <rect x="10" y="19" width="8" height="9" />
          {/* Front paw */}
          <rect x="11" y="28" width="3" height="2" fill="#F59E0B" />
          <rect x="15" y="28" width="3" height="2" fill="#F59E0B" />
          {/* Tail sitting curled up */}
          <rect x="6" y="22" width="4" height="4" fill="#78350F" />
          <rect x="5" y="20" width="2" height="2" fill="#F59E0B" />
        </svg>
      ) : (
        /* Cute Running/Walking Pixel Puppy SVG */
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="currentColor" 
          className="text-amber-600 dark:text-amber-500 drop-shadow-[0_3px_5px_rgba(0,0,0,0.2)]"
          style={{
            animation: "wobble 0.2s infinite alternate ease-in-out"
          }}
        >
          {/* Head */}
          <rect x="12" y="6" width="10" height="10" />
          {/* Snout */}
          <rect x="20" y="10" width="4" height="4" fill="#F59E0B" />
          <rect x="22" y="10" width="2" height="2" fill="#000" />
          {/* Eyes */}
          <rect x="16" y="8" width="2" height="2" fill="#000" />
          {/* Ears (flapping slightly up while running) */}
          <rect x="10" y="4" width="3" height="5" fill="#78350F" />
          {/* Collar */}
          <rect x="12" y="15" width="10" height="2" fill="#EF4444" />
          {/* Body running */}
          <rect x="8" y="17" width="14" height="7" />
          {/* Leg 1 */}
          <rect x="10" y="24" width="2" height="4" fill="#78350F" />
          {/* Leg 2 */}
          <rect x="13" y="24" width="2" height="4" />
          {/* Leg 3 */}
          <rect x="17" y="24" width="2" height="4" fill="#78350F" />
          {/* Leg 4 */}
          <rect x="20" y="24" width="2" height="4" />
          {/* Tail wagging up */}
          <rect x="4" y="14" width="4" height="4" fill="#F59E0B" />
          <rect x="6" y="12" width="2" height="2" fill="#78350F" />
        </svg>
      )}

      {/* Inject custom running wobble animation keyframes */}
      <style jsx global>{`
        @keyframes wobble {
          0% { transform: rotate(-6deg) translateY(0); }
          100% { transform: rotate(6deg) translateY(-3px); }
        }
      `}</style>
    </div>
  );
}
