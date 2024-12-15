import './Text.css'

interface TextProps {
  text: string | number
  type?: 'default' | 'error' | 'white' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}
export const Text = ({ text, type = 'default', size = 'small' }: TextProps) => {
  return (
    <span
      className={`text__container text--${size} text--${type} text-w--heavy `}
    >
      {text}
    </span>
  )
}
