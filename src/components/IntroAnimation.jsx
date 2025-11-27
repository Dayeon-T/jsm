import { useEffect, useState } from 'react'

function IntroAnimation({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false)
  const letters = ['S', 'o', 'o', 'm', 'i', 'n']

  useEffect(() => {
    // 글자 애니메이션 완료 후 페이드아웃 시작
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 1800) // 모든 글자 등장 후 잠시 유지

    // 페이드아웃 완료 후 메인으로 전환
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex overflow-hidden">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="text-white text-6xl md:text-8xl font-bold inline-block animate-slide-up"
            style={{
              animationDelay: `${index * 0.12}s`,
              fontFamily: "'Pretendard', sans-serif",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default IntroAnimation

