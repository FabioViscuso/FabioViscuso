export default function Postit({ key, creator, title, date, content, color = '#f9f474' }) {
    return (
        <div className={`font-indieFlower text-2xl flex flex-col gap-2 p-5 bg-[${color}] w-60 h-60 text-slate-800`}>
            <span className="text-3xl">{title}</span>
            <span>from: {creator}</span>
            <span>date: {date}</span>
            <span className="m-0 h-full max-h-22 overflow-y-auto">{content}</span>
        </div>
    )
}
