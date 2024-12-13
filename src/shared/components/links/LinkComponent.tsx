import { Link } from 'react-router-dom'
import './LinkComponent.css'

interface LinkProps {
  to: string
  label: string
}

export const LinkComponent = ({ to, label }: LinkProps) => {
  return (
    <Link to={to} className="link link--color">
      {label}
    </Link>
  )
}
