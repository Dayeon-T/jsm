const starIcon = "/star.svg";

function SectionTitle({ title, isDark = true }) {
  const textColor = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div className="flex items-center gap-2 mb-10 group cursor-pointer">
      <img
        src={starIcon}
        alt="star"
        className={`w-10 h-10 group-hover-spin `}
      />
      <p className={`text-[52px] ${textColor} ml-6`}>{title}</p>
    </div>
  );
}

export default SectionTitle;
