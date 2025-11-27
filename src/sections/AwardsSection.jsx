import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import awardsData from "../data/awards.json";

function AwardsSection({ isDark = true }) {
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="mt-120 mb-120">
      <ScrollReveal>
        <SectionTitle title="AWARDS" isDark={isDark} />
      </ScrollReveal>

      {/* Awards 리스트 */}
      <div className="flex flex-col mt-10">
        {awardsData.awards.map((item, index) => (
          <ScrollReveal key={item.id} delay={100 * Math.min(index + 1, 5)}>
            <div className="mb-8">
              <p className={`text-2xl md:text-2xl font-md ${textColor}`}>
                {item.title}
              </p>
              <p className={`text-sm font-light ${subTextColor} mt-1`}>
                {item.period}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default AwardsSection;
