interface Props {
    content: string,
    additionalCSS?: string
}

export default function Heading({ content, additionalCSS }: Props) {
  return (
    <h3
      className={` [font-size:clamp(3rem,5vmax,6rem)] leading-none [text-shadow:0px_0px_6px_#888] ${additionalCSS ? additionalCSS : ''} `}
      data-aos="fade-right"
    >
        {content}
    </h3>
  );
}
