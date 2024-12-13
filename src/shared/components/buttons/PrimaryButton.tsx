import './PrimaryButton.css'
import './Button.css'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  loading?: boolean
}

export const PrimaryButton = ({ label, loading, ...props }: ButtonProps) => {
  return (
    <button className="button primary-button primary-button--color" {...props}>
      {loading ? 'Loading..' : label}
    </button>
  )
}
