function About() {
  return (
    <div className="max-w-4xl w-full p-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        소개 페이지
      </h1>
      <p className="text-xl md:text-2xl leading-relaxed text-white/70 dark:text-white/70">
        이 앱은 React Router 없이 조건부 렌더링을 사용하여 구현되었습니다.
      </p>
    </div>
  )
}

export default About

