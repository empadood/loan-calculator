import { Text } from 'src/shared/components/typography/Text'

import { Heading } from 'src/shared/components/typography/Heading'
import { LinkComponent } from 'src/shared/components/links/LinkComponent'
import { CalcluatorLib } from '../components/CalculatorLib'
import { buildLoanApplcationQuery } from '../services/calulator-service'
import { Loan } from '../models/loan'
import { SimpleSection } from 'src/shared/components/layout/SimpleLayout'

export const CalculatorWithLibView = () => {
  const onApply = (loan: Loan) => console.log(buildLoanApplcationQuery(loan))
  return (
    <SimpleSection
      header={<Heading text="Lånekalkyl" type="h2" />}
      content={<CalcluatorLib onApply={onApply} />}
      footer={
        <div>
          <Text text="Lösning baserat på biblioteket Tanstack Ranger " />
          <LinkComponent
            to="https://tanstack.com/ranger/latest/docs/quick-start"
            label={<Text text="Tanstack" type="secondary" />}
            target="_blank"
          />

          <Text text=" och styled-components " />
          <LinkComponent
            to="https://styled-components.com/"
            label={<Text text="Styled Components" type="secondary" />}
            target="_blank"
          />
        </div>
      }
    />
  )
}
