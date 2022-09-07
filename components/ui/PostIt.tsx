export default function Postit({ key, creator, title, date, content, color = '#f9f474' }) {
    return (
        <div className={`flex flex-col gap-2 p-5 bg-[${color}] w-52 text-slate-800`}>
            <span>{title}</span>
            <span>by: {creator}</span>
            <span>date: {date}</span>
            <span>{content}</span>
        </div>
    )
}
