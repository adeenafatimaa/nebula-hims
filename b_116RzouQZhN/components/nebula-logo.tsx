export function NebulaLogo() {
  return (
    <div className="flex items-end gap-3">
      {/* Three Slabs */}
      <div className="flex items-end gap-1.5">
        {/* Shortest slab - Cyan */}
        <div
          className="w-4 h-10 rounded-sm"
          style={{
            background: "linear-gradient(to bottom, #00ffdd, #00e5c8)",
            boxShadow: "0 0 20px rgba(0, 255, 221, 0.6), 0 0 40px rgba(0, 255, 221, 0.3)",
          }}
        />
        {/* Medium slab - Sky Blue */}
        <div
          className="w-4 h-16 rounded-sm"
          style={{
            background: "linear-gradient(to bottom, #5ab4ff, #4aa0e8)",
            boxShadow: "0 0 20px rgba(90, 180, 255, 0.6), 0 0 40px rgba(90, 180, 255, 0.3)",
          }}
        />
        {/* Tallest slab - Lavender */}
        <div
          className="w-4 h-24 rounded-sm"
          style={{
            background: "linear-gradient(to bottom, #b388ff, #a070f0)",
            boxShadow: "0 0 20px rgba(179, 136, 255, 0.6), 0 0 40px rgba(179, 136, 255, 0.3)",
          }}
        />
      </div>

      {/* Nebula Text */}
      <span className="text-white text-5xl font-bold tracking-tight ml-2">
        Nebula
      </span>
    </div>
  )
}
