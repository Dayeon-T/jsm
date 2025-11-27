import { Tooltip } from "react-tooltip";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import projectsData from "../data/projects.json";
import { getTechIconUrl } from "../utils/techIcons";

function ProjectsSection({ onProjectClick, isDark = true }) {
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const titleHoverClass = isDark ? 'title-hover-pink' : 'title-hover-pink-light';

  return (
    <div className="mt-120 mb-120">
      <ScrollReveal>
        <SectionTitle title="PROJECTS" isDark={isDark} />
      </ScrollReveal>
      
      {/* Projects 리스트 */}
      <div className="flex flex-col gap-12">
        {projectsData.projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={100 * Math.min(index + 1, 5)}>
            <div className="flex gap-8">
              <p className="text-xl font-black text-neon-pink w-8">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="flex flex-col gap-2">
                <p 
                  className={`text-2xl md:text-3xl font-black ${textColor} ${titleHoverClass} cursor-pointer`}
                  onClick={() => onProjectClick(project)}
                >
                  {project.mainTitle}
                </p>
                <p className={`text-sm font-light ${subTextColor}`}>
                  {project.subTitle}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.techStack.map((tech, i) => {
                    const iconUrl = getTechIconUrl(tech);
                    return iconUrl ? (
                      <img 
                        key={i}
                        src={iconUrl}
                        alt={tech}
                        className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                        data-tooltip-id="project-tech-tooltip"
                        data-tooltip-content={tech}
                      />
                    ) : (
                      <span 
                        key={i} 
                        className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                        data-tooltip-id="project-tech-tooltip"
                        data-tooltip-content={tech}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      {/* 프로젝트 기술스택 툴팁 */}
      <Tooltip 
        id="project-tech-tooltip" 
        place="bottom"
        style={{ 
          backgroundColor: 'transparent', 
          color: isDark ? 'white' : 'black',
          fontSize: '12px',
          padding: '4px 0'
        }}
      />
    </div>
  );
}

export default ProjectsSection;
