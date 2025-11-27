function ParticleBackground() {
  // 25개의 파티클 생성
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2-6px
    left: Math.random() * 100, // 0-100%
    delay: Math.random() * 15, // 0-15s 딜레이
    duration: Math.random() * 10 + 15, // 15-25s 지속시간
    opacity: Math.random() * 0.1 + 0.05, // 5-15% opacity
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '-20px',
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground

