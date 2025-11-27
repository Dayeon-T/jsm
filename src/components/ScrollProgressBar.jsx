import { useState, useEffect } from "react";

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-0 h-screen w-1.5 bg-gray-700 z-50 rounded-full">
      <div 
        className="w-full bg-[#ff6ec7] transition-all duration-150 ease-out rounded-full"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;

