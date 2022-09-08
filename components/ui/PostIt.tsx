export default function Postit({ creator, title, content, color = '#f9f474' }) {
    return (
        <div className={`font-indieFlower break-words text-2xl flex flex-col gap-2 p-5 bg-[${color}] w-64 h-64 text-slate-800`}>
            <span className="text-3xl">{title}</span>
            <span className="text-xl">from: {creator}</span>
            <span className="text-sm leading-3">----</span>
            <span className="m-0 h-full max-h-22 overflow-y-auto">{content}</span>
        </div>
    )
}
