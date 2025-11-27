// 기술스택 이름을 devicon URL로 매핑
export const techIconMap = {
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

export const getTechIconUrl = (tech) => {
  const icon = techIconMap[tech];
  if (icon) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
  }
  return null;
};

