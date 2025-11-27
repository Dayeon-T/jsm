function HeroSection({ isDark = true }) {
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <>
      {/* 큰 타이틀 */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
        <span className="text-neon-pink block">Hello</span>
        <span className={`${textColor} block`}>World!</span>
      </h1>
      
      {/* 설명 텍스트 */}
      <p className={`text-base md:text-lg ${textColor} leading-relaxed max-w-md desc-fade-in`}>
        새로운 가치로{" "}
        <span className="text-neon-pink font-bold">
          사람과 기술을 잇는 개발자
        </span>{" "}
        지수민입니다
      </p>
      <p className={`text-sm md:text-sm ${subTextColor} leading-relaxed text-left mt-4 desc-fade-in`}>
        사용자 중심의 관점을 바탕으로,
      </p>
      <p className={`text-sm md:text-sm ${subTextColor} leading-relaxed text-left desc-fade-in`}>
        모든 프로젝트가 사용자에게 꼭 필요한 경험을 제공하도록 설계합니다.
      </p>

      {/* 통계 섹션 - 오른쪽 정렬 */}
      <div className="flex justify-end">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* 스택 개수 */}
          <div className="stat-item text-right">
            <span className="text-3xl md:text-4xl font-black text-neon-pink">
              8+
            </span>
            <p className={`text-sm md:text-base ${subTextColor} mt-1`}>
              Tech Stacks
            </p>
          </div>

          {/* 프로젝트 개수 */}
          <div className="stat-item text-right">
            <span className="text-3xl md:text-4xl font-black text-neon-pink">
              20+
            </span>
            <p className={`text-sm md:text-base ${subTextColor} mt-1`}>
              Completed Projects
            </p>
          </div>

          {/* 공부 시간 */}
          <div className="stat-item text-right">
            <span className="text-3xl md:text-4xl font-black text-neon-pink">
              1K+
            </span>
            <p className={`text-sm md:text-base ${subTextColor} mt-1`}>
              Hours Studied
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
