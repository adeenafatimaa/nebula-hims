"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  opacity: number
}

const COLORS = ["#00ffdd", "#5ab4ff", "#b388ff"]

export function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight * 0.4 // Upper 40% area

    // Initialize 30 particles
    particlesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * (containerWidth * 0.5), // Start in left half
      y: Math.random() * containerHeight,
      size: 2 + Math.random() * 2, // 2px to 4px
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speedX: 0.3 + Math.random() * 0.5, // 0.3 to 0.8 px per frame
      speedY: (Math.random() - 0.5) * 0.4, // ±0.2 px per frame
      opacity: 0.4 + Math.random() * 0.4, // 0.4 to 0.8
    }))

    // Create particle elements
    const particleElements: HTMLDivElement[] = []
    particlesRef.current.forEach((particle) => {
      const el = document.createElement("div")
      el.style.position = "absolute"
      el.style.width = `${particle.size}px`
      el.style.height = `${particle.size}px`
      el.style.borderRadius = "50%"
      el.style.backgroundColor = particle.color
      el.style.opacity = String(particle.opacity)
      el.style.pointerEvents = "none"
      el.style.boxShadow = `0 0 ${particle.size * 2}px ${particle.color}`
      container.appendChild(el)
      particleElements.push(el)
    })

    // Animation loop
    const animate = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Reset if particle goes past right edge
        if (particle.x > containerWidth) {
          particle.x = 0
          particle.y = Math.random() * containerHeight
        }

        // Bounce vertically within bounds
        if (particle.y < 0 || particle.y > containerHeight) {
          particle.speedY *= -1
        }

        // Update element position
        const el = particleElements[index]
        if (el) {
          el.style.transform = `translate(${particle.x}px, ${particle.y}px)`
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      particleElements.forEach((el) => el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ height: "40%" }}
    />
  )
}
