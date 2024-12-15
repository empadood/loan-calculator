import { Heading } from 'src/shared/components/typography/Heading'

import { Text } from 'src/shared/components/typography/Text'
import { CalculatorComponent } from '../components/Calculator'
import './CalculatorView.css'
import { Loan } from '../models/loan'
import { buildLoanApplcationQuery } from '../services/calulator-service'

export const CalculatorView = () => {
  const onApply = (loan: Loan) => {
    const url = buildLoanApplcationQuery(loan)
    console.log(url)
  }
  return (
    <section className="calculator-view__container">
      <Heading text="Lånekalkyl" type="h2" />
      <div>
        <CalculatorComponent onApplyForLoan={onApply} />
        <Text text="Hemmasnickrad lösning" />
      </div>
    </section>
  )
}
