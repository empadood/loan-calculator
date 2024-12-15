import { Link } from 'react-router-dom'
import './LinkComponent.css'

interface LinkProps {
  to: string
  label: string | JSX.Element
  target?: string
}

export const LinkComponent = ({ to, label, target }: LinkProps) => {
  return (
    <Link to={to} className="link link--color" target={target}>
      {label}
    </Link>
  )
}
