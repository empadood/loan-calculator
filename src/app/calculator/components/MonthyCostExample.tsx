import {
  formatCost,
  replaceCurrencyWithCode
} from '../services/calulator-service'
import './MonthyCostExample.css'

interface ExampleProps {
  cost: number
}
export const MonthyCostExample = ({ cost }: ExampleProps) => {
  const displayValue = `${replaceCurrencyWithCode(formatCost(cost))} / mån`

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
