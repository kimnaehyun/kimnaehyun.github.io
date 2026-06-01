export default function TagRow({ items }) {
  return (
    <div className="tag-row">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
