export function ZigzagDivider() {
  // Generate zigzag path points
  // Start at top center, zigzag down with 12-15 points
  const zigzagPoints: string[] = []
  const numZags = 14
  const segmentHeight = 100 / numZags // percentage
  const zigWidth = 25 // pixels left/right from center

  for (let i = 0; i <= numZags; i++) {
    const y = i * segmentHeight
    const x = i % 2 === 0 ? 30 + zigWidth : 30 - zigWidth
    zigzagPoints.push(`${x},${y}%`)
  }

  // Create path that fills left side with navy
  const pathD = `
    M 0,0%
    L ${zigzagPoints.join(" L ")}
    L 0,100%
    Z
  `

  return (
    <svg
      className="absolute top-0 right-0 h-full pointer-events-none"
      style={{
        width: "60px",
        transform: "translateX(100%)",
      }}
      preserveAspectRatio="none"
    >
      <path d={pathD} fill="#0f1e4a" />
    </svg>
  )
}
