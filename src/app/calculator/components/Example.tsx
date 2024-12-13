import './Example.css'

interface ExampleProps {
  cost: number
}
export const Example = ({ cost }: ExampleProps) => {
  const formattedCost = Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 // rounds the amount to nearest whole number
  }).format(cost)

  const displayValue = `${formattedCost} / mån`

  return (
    <div className="example__container">
      <span className="text--white text-w--normal exmaple__text-item">
        Exemple på månadskostnad
      </span>

      <span className="exmaple__text-item text--white text-w--heavy">
        {displayValue}
      </span>
    </div>
  )
}
