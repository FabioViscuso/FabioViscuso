interface Props {
    content: string,
    additionalCSS?: string
}

export default function Heading({ content, additionalCSS }: Props) {
  return (
    <h3
      className={`text-5xl lg:text-7xl drop-shadow-[0px_0px_1px_rgb(0,0,0)] leading-none ${additionalCSS} `}
      data-aos="fade-up"
    >
        {content}
    </h3>
  );
}
