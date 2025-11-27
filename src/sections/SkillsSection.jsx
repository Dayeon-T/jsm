import { Tooltip } from "react-tooltip";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";

function SkillsSection({ isDark = true }) {
  const subTextColor = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className="mt-120 mb-120">
      <ScrollReveal>
        <SectionTitle title="MY SKILLS" isDark={isDark} />
      </ScrollReveal>

      {/* 기술 스택 아이콘들 */}
      <div className="flex flex-col gap-20">
        <ScrollReveal delay={100}>
          <div className="flex gap-20">
            <p className={`text-[36px] ${subTextColor} mb-4`}>Web</p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="React"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="TypeScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="HTML5"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="CSS3"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="Java"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="Python"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex gap-20">
            <p className={`text-[36px] ${subTextColor} mb-4`}>App</p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                alt="Flutter"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="Flutter"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                alt="Dart"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="Dart"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                alt="Swift"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="Swift"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex gap-20">
            <p className={`text-[36px] ${subTextColor} mb-4`}>Database</p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="MySQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="MongoDB"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex gap-20">
            <p className={`text-[36px] ${subTextColor} mb-4`}>Tools</p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="VS Code"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="Figma"
                className="skill-icon"
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="Figma"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className={`skill-icon ${isDark ? 'invert' : ''}`}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content="GitHub"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 툴팁 */}
      <Tooltip
        id="skill-tooltip"
        place="bottom"
        style={{
          backgroundColor: "transparent",
          color: isDark ? "white" : "black",
          fontSize: "14px",
          padding: "4px 0",
        }}
      />
    </div>
  );
}

export default SkillsSection;
