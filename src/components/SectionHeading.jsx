export default function SectionHeading({ kicker, children }) {
  return (
    <div>
      <div className="section-heading">
        <h2>{kicker}</h2>
      </div>
      {children && <span>{children}</span>}
    </div>
  );
}
