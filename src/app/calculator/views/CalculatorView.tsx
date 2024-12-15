import { Heading } from 'src/shared/components/typography/Heading'

import { Text } from 'src/shared/components/typography/Text'
import { CalculatorComponent } from '../components/Calculator'
import { Loan } from '../models/loan'
import { buildLoanApplcationQuery } from '../services/calulator-service'
import { SimpleSection } from 'src/shared/components/layout/SimpleLayout'

export const CalculatorView = () => {
  const onApply = (loan: Loan) => console.log(buildLoanApplcationQuery(loan))
  return (
    <SimpleSection
      header={<Heading text="Lånekalkyl" type="h2" />}
      content={<CalculatorComponent onApplyForLoan={onApply} />}
      footer={<Text text="Hemmasnickrad lösning" />}
    />
  )
}
