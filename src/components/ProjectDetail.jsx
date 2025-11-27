import { Tooltip } from "react-tooltip";

// 기술스택 아이콘 매핑
const techIconMap = {
  "React": "react/react-original",
  "React.ts": "react/react-original",
  "Flutter": "flutter/flutter-original",
  "NestJS": "nestjs/nestjs-original",
  "Nest.js": "nestjs/nestjs-original",
  "PostgreSQL": "postgresql/postgresql-original",
  "Postgresql": "postgresql/postgresql-original",
  "Python": "python/python-original",
  "Fast API": "fastapi/fastapi-original",
  "SQLite": "sqlite/sqlite-original",
  "Node.js": "nodejs/nodejs-original",
  "supabase": "supabase/supabase-original",
  "Firebase": "firebase/firebase-plain",
  "firebase": "firebase/firebase-plain",
  "Spring": "spring/spring-original",
  "HTML5": "html5/html5-original",
  "HTML": "html5/html5-original",
  "JavaScript": "javascript/javascript-original",
  "CSS3": "css3/css3-original",
  "css": "css3/css3-original",
  "TypeScript": "typescript/typescript-original",
  "java": "java/java-original",
  "Java": "java/java-original",
  "MySQL": "mysql/mysql-original",
  "Go": "go/go-original",
  "mongoDB": "mongodb/mongodb-original",
};

const getTechIconUrl = (tech) => {
  const icon = techIconMap[tech];
  if (icon) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
  }
  return null;
};

function ProjectDetail({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-[#212121] z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Back 버튼 */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <span className="text-xl">←</span>
          <span>Back</span>
        </button>

        {/* 타이틀 + GitHub 링크 */}
        <div className="flex items-baseline gap-4 mb-2">
          
          {project.githubUrls && project.githubUrls.length > 0 && (
            <a 
              href={project.githubUrls[0]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <h1 className="text-4xl md:text-5xl font-black text-neon-pink">
            {project.mainTitle}
          </h1>
            </a>

          )}
          <p className="text-gray-400 text-base mb-4">{project.period}</p>
        </div>
        <p className="text-gray-300 mb-4">{project.subTitle}</p>

        

        {/* Tech & Technique */}
        <div className="mb-8">
         
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => {
              const iconUrl = getTechIconUrl(tech);
              return (
                <div key={i} className="flex items-center gap-2">
                  {iconUrl ? (
                    <img 
                      src={iconUrl}
                      alt={tech}
                      className="w-5 h-5"
                      data-tooltip-id="detail-tech-tooltip"
                      data-tooltip-content={""}
                    />
                  ) : null}
                  <span className="text-gray-300 text-sm">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
         
          
          <p className="text-white text-lg font-semibold  mb-4 mt-12">주요 기능</p>
          <ul className="space-y-1">
            {project.mainFeatures.map((feature, i) => (
              <li key={i} className="text-gray-300"><span className="text-neon-pink mr-2">•</span>{feature}</li>
            ))}
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-12">
          <p className="text-white text-lg font-semibold  mb-4 mt-12">역할</p>
          <ul className="space-y-2">
            {project.contributions.map((contribution, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="text-neon-pink">•</span>
                {contribution}
              </li>
            ))}
          </ul>
        </div>

        {/* 이미지 */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-col gap-6 items-center">
              {project.images.map((img, i) => (
                <div key={i} className="bg-white rounded-lg p-4 inline-block">
                  <img 
                    src={`/${img}`} 
                    alt={`${project.mainTitle} - ${i + 1}`} 
                    className="max-w-full h-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        

        {/* GitHub Links */}
        {project.githubUrls && project.githubUrls.length > 0 && (
          <div className="mb-12">
            <p className="text-white text-lg font-semibold  mb-4 mt-12">상세 코드</p>
            <div className="flex flex-col gap-2">
              {project.githubUrls.map((url, i) => (
                <a 
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-pink transition-colors text-sm break-all"
                >
                  {url}
                </a>
              ))}
            </div>
          </div>
        )}

        <Tooltip 
          id="detail-tech-tooltip" 
          place="bottom"
          style={{ 
            backgroundColor: 'transparent', 
            color: 'white',
            fontSize: '12px',
            padding: '4px 0'
          }}
        />
      </div>
    </div>
  );
}

export default ProjectDetail;

