export interface PostItType {
  id?: string,
  creator: string,
  title: string,
  content: string,
  color: string
}

export default function Postit({ creator, title, content, color = "#f9f474" }: PostItType) {
  return (
    <div
      className={`break-words flex flex-col gap-2 p-5 bg-[${color}] w-64 h-64 text-slate-800 shadow-lg`}
    >
      <span className="font-indieFlower text-2xl">{title}</span>
      <span className="font-indieFlower text-xl">from: {creator}</span>
      <span className="font-indieFlower text-sm leading-3">----</span>
      <span className="font-indieFlower text-2xl m-0 h-full max-h-22 overflow-y-auto">
        {content}
      </span>
    </div>
  );
}
