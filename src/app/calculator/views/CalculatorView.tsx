import { Heading } from '../../../shared/components/typography/Heading'
import './CalculatorView.css'

import { CalculatorComponent } from '../components/Calculator'
export const CalculatorView = () => {
  return (
    <div className="calculator-view__container">
      <Heading text="Lånekalkyl" type="h2" />
      <CalculatorComponent />
    </div>
  )
}
