export default function PostitDetail({ key, creator, title, date, content }) {
    return (
        <div>
            <span>{title}</span>
            <span>{creator}</span>
            <span>{date}</span>
            <span>{content}</span>
        </div>
    )
}
