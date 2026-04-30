"use client"

export function ECGAnimation() {
  // ECG path: flat, then spike up, down below midline, back to midline, then flat
  // Midline is at y=60 (half of 120px height)
  // Start flat at 30% width, spike goes up 40px (to y=20), down 60px below midline (to y=120), back to midline
  const ecgPath = `
    M 0,60 
    L 180,60 
    L 200,20 
    L 220,120 
    L 240,60 
    L 600,60
  `

  return (
    <svg
      className="absolute w-full pointer-events-none"
      style={{
        height: "120px",
        bottom: "15%",
        left: 0,
      }}
      viewBox="0 0 600 120"
      preserveAspectRatio="none"
    >
      <path
        d={ecgPath}
        fill="none"
        stroke="#00ffdd"
        strokeWidth="2"
        opacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1500,
          strokeDashoffset: 1500,
          animation: "ecgDraw 4s linear infinite",
          filter: "drop-shadow(0 0 8px #00ffdd)",
        }}
      />
      <style>{`
        @keyframes ecgDraw {
          0% {
            stroke-dashoffset: 1500;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  )
}
