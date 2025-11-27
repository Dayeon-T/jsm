function Navbar({ isDark, onThemeToggle }) {
  const bgColor = isDark 
    ? 'bg-gray-900/70 border-gray-700/50' 
    : 'bg-white/70 border-gray-200/50';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-gray-900';
  const logoColor = isDark ? 'text-white' : 'text-gray-900';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-6 right-0 -translate-x-1/2 z-50 px-8 py-4 rounded-full backdrop-blur-md border ${bgColor} shadow-lg transition-all duration-300`}>
      <div className="flex items-center gap-8">
        {/* 로고/이름 */}
        <span 
          className={`font-bold text-lg ${logoColor} cursor-pointer`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Soomin
        </span>

        {/* 구분선 */}
        <div className={`w-px h-5 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>

        {/* 네비게이션 링크 */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-sm ${textColor} ${hoverColor} transition-colors`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`text-sm ${textColor} ${hoverColor} transition-colors`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className={`text-sm ${textColor} ${hoverColor} transition-colors`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('awards')}
            className={`text-sm ${textColor} ${hoverColor} transition-colors`}
          >
            Awards
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`text-sm ${textColor} ${hoverColor} transition-colors`}
          >
            Projects
          </button>
        </div>

        {/* 구분선 */}
        <div className={`w-px h-5 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>

        {/* 테마 토글 버튼 */}
        <button
          onClick={onThemeToggle}
          className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg 
              className="w-5 h-5"
              fill="#FF6EC7" 
              viewBox="0 0 24 24"
            >
              <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          ) : (
            <svg 
              className="w-5 h-5"
              fill="#FF6EC7" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

