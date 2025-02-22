"use client"

import React, { useRef, useEffect } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

interface FallingStarsBackgroundProps {
  children: React.ReactNode
}

const FallingStarsBackground: React.FC<FallingStarsBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      initStars()
    }

    const speedFactor = 1.5

    const createStar = (): Star => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: (Math.random() * 0.5 + 0.1) * speedFactor,
      opacity: Math.random() * 0.8 + 0.2,
    })

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 5000) // Adjust density
      stars = Array.from({ length: starCount }, createStar)
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        star.y += star.speed

        if (star.y > canvas.height) {
          Object.assign(star, createStar())
        }
      })
    }

    const animate = () => {
      drawStars()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default FallingStarsBackground
