import { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation";
import ParticleBackground from "./components/ParticleBackground";
import ProjectDetail from "./components/ProjectDetail";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import AwardsSection from "./sections/AwardsSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 테마 변경 시 body 클래스 업데이트
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackFromDetail = () => {
    setSelectedProject(null);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-[70%] mx-auto transition-colors duration-500 ${isDarkMode ? '' : 'light-mode'}`}>
      {/* 플로팅 네비바 */}
      {!showIntro && !selectedProject && (
        <Navbar isDark={isDarkMode} onThemeToggle={handleThemeToggle} />
      )}

      {/* 오른쪽 세로 프로그레스바 */}
      {!showIntro && !selectedProject && <ScrollProgressBar />}

      {/* 프로젝트 상세 페이지 */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackFromDetail} 
        />
      )}

      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <div
        className={`min-h-screen relative transition-colors duration-500 ${
          isDarkMode ? 'bg-[#212121]' : 'bg-[#f0ece8]'
        } ${showIntro ? "opacity-0" : "animate-fade-in"}`}
      >
        <ParticleBackground />
        
        {/* 메인 컨텐츠 - 인트로가 끝난 후에만 렌더링 */}
        {!showIntro && (
          <div className="relative z-10 px-8 md:px-16 pt-32 md:pt-40">
            <HeroSection isDark={isDarkMode} />
            
            <div id="about">
              <AboutSection isDark={isDarkMode} />
            </div>
            
            <div id="skills">
              <SkillsSection isDark={isDarkMode} />
            </div>
            
            <div id="experience">
              <ExperienceSection isDark={isDarkMode} />
            </div>
            
            <div id="awards">
              <AwardsSection isDark={isDarkMode} />
            </div>
            
            <div id="projects">
              <ProjectsSection onProjectClick={handleProjectClick} isDark={isDarkMode} />
            </div>
            
            <Footer isDark={isDarkMode} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
