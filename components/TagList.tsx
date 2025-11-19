type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm text-slate-600">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
