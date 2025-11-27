import useScrollReveal from "../hooks/useScrollReveal";

function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "",
  threshold = 0.1 
}) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const directionClass = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
  }[direction];

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${directionClass} ${isVisible ? "visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;

