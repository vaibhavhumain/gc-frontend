export default function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags?.map((tag) => (
        <span key={tag._id} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          {tag.title}
        </span>
      ))}
    </div>
  );
}
