import ScrollReveal from "../components/ScrollReveal";

function AboutSection({ isDark = true }) {
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDark ? 'border-gray-400' : 'border-gray-300';

  return (
    <div className="mt-40">
      <ScrollReveal>
        <p className={`mb-4 text-sm ${subTextColor}`}>This is me</p>
      </ScrollReveal>
      
      <div className={`grid grid-cols-3 gap-4 w-full border-t-1 ${borderColor}`}>
        <ScrollReveal direction="left" className="col-span-1">
          <p className={`text-5xl mt-10 ${textColor}`}>
            Hi, I'm <br />
            Soomin.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200} className="col-span-2">
          <p className={`text-base font-light mt-10 ${textColor}`}>
            사용자에게 소중하고 가치 있는 하루를 선물하는 개발자가 되고자
            프론트엔드 개발자입니다. 저는 단순히 기능을 구현하는 것을 넘어,
            사용자가 어떤 경험을 하고 어떤 가치를 느낄지를 가장 먼저
            고민하며 개발을 진행합니다. 사용자의 관점에서 문제를 깊이
            이해하고, 작은 디테일 하나까지 놓치지 않으려는 태도는 제가
            개발자로서 가장 자랑스럽게 생각하는 강점 중 하나입니다.
          </p>
        </ScrollReveal>

        <div className="col-span-1"></div>
        
        <ScrollReveal delay={100} className="col-span-2">
          <p className={`text-base font-light mt-10 ${textColor}`}>
            저에게 개발이란 단순한 코딩이 아니라, 사람들에게 긍정적인 영향을
            주는 도구입니다. 기술을 통해 누군가의 하루가 조금 더 편리하고
            즐거워질 수 있다는 점에서 큰 보람을 느끼고, 그 경험이 쌓일수록
            더 나은 서비스를 만들고자 하는 열정이 생깁니다. 새로운 기술이나
            도전에 대해 열린 마음으로 배우고, 항상 성장하려는 자세를
            유지하려 노력합니다. 저는 앞으로도 사용자의 삶에 진정한 가치를
            더하는 경험을 만드는 데 집중하며, 기술을 통해 사람들에게 의미
            있는 변화를 선사하는 개발자가 되고 싶습니다. 이를 위해 끊임없이
            학습하고, 다양한 관점에서 문제를 바라보며, 누구보다 세심하고
            책임감 있게 프로젝트를 완수하는 개발자로 성장해 나갈 것입니다.
          </p>
        </ScrollReveal>

        <div className="col-span-1"></div>
        
        <ScrollReveal delay={100} className="col-span-2">
          <p className={`text-base font-light mt-10 ${textColor}`}>
            앞으로도 사용자의 삶에 진정한 가치를 더하는 경험을 만드는 데
            집중하며, 기술을 통해 사람들에게 의미 있는 변화를 선사하는
            개발자가 되고 싶습니다. 이를 위해 끊임없이 학습하고, 다양한
            관점에서 문제를 바라보며, 누구보다 세심하고 책임감 있게
            프로젝트를 완수하는 개발자로 성장해 나갈 것입니다.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default AboutSection;
