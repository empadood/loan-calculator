import './Heading.css'

interface HeadingProps {
  text: string | number
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({ text, type = 'h1' }: HeadingProps) => {
  const HeadingTag = {
    h1: <h1 className="heading"> {text} </h1>,
    h2: <h2 className="heading"> {text} </h2>,
    h3: <h3 className="heading"> {text} </h3>,
    h4: <h4 className="heading"> {text} </h4>,
    h5: <h5 className="heading"> {text} </h5>,
    h6: <h6 className="heading"> {text} </h6>
  } as const

  return HeadingTag[type]
}
