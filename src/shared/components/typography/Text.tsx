import './Text.css'

interface TextProps {
  text: string
  type?: 'default' | 'success' | 'error' | 'warning' | 'white'
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
