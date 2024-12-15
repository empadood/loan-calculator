import { Heading } from 'src/shared/components/typography/Heading'

import { Text } from 'src/shared/components/typography/Text'
import { CalculatorComponent } from '../components/Calculator'
import { Loan } from '../models/loan'
import { buildLoanApplcationQuery } from '../services/calulator-service'
import { SimpleSection } from 'src/shared/components/layout/SimpleLayout'
import { LinkComponent } from 'src/shared/components/links/LinkComponent'
import { routes } from 'src/shared/routes/routes'

export const CalculatorView = () => {
  const onApply = (loan: Loan) => {
    console.log(buildLoanApplcationQuery(loan))
  }

  const desc = `Hemmasnickrad lösning med fokus på att använda element, css och pseudo-element som finns i browsern.
   Firefox ger en bättre upplevelse eftersom dess psuedo-element har kommit lite längre i utvecklingen jämfört med Chrome och Edge.
   Det gav dock inspiration till att försöka skapa en annan variant med hjälp av bibliotek som fungerar bättre med fler browsers (Firefox, Edge och Chrome i detta fall) som finns här. `
  return (
    <SimpleSection
      header={<Heading text="Lånekalkyl" type="h2" />}
      content={<CalculatorComponent onApplyForLoan={onApply} />}
      footer={
        <>
          <Text text={desc} />
          <LinkComponent label={'v2'} to={routes.CalculatorWithLib} />
        </>
      }
    />
  )
}
