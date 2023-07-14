interface Props {
    content: string,
    additionalCSS?: string
}

export default function Heading({ content, additionalCSS }: Props) {
  return (
    <h3
      className={`header-common leading-none ${additionalCSS} `}
      data-aos="fade-right"
    >
        {content}
    </h3>
  );
}
