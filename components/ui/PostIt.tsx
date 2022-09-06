export default function Postit({ key, creator, title, date, content }) {
    return (
        <div className="flex flex-col gap-2 p-5 bg-red-400 w-max">
            <span>{title}</span>
            <span>by: {creator}</span>
            <span>date: {date}</span>
            <span>{content}</span>
        </div>
    )
}
