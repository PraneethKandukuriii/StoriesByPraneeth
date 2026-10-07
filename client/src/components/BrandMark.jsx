function BrandMark({ className = "", accentClassName = "text-white" }) {
  return (
    <span className={`font-serif font-normal tracking-[-.06em] ${className}`}>
      Stories<span className={`font-bold ${accentClassName}`}>ByPraneeth</span>
    </span>
  );
}

export default BrandMark;
