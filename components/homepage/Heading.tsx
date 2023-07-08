interface Props {
    content: string,
    additionalCSS?: string
}

export default function Heading({ content, additionalCSS }: Props) {
  return (
    <h3
      className={`text-5xl lg:text-7xl [text-shadow:4px_3px_1px_rgba(0,0,0,0.35)] leading-none ${additionalCSS} `}
      data-aos="fade-up"
    >
        {content}
    </h3>
  );
}
