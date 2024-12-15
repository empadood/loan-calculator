import { Text } from 'src/shared/components/typography/Text'

import { Heading } from 'src/shared/components/typography/Heading'
import { LinkComponent } from 'src/shared/components/links/LinkComponent'
import './CalculatorWithLibrary.css'
import { CalcluatorLib } from '../components/CalculatorLib'

export const CalculatorWithLibView = () => {
  return (
    <section className="calculator-view-lib__container">
      <Heading text="Lånekalkyl" type="h2" />
      <CalcluatorLib />
      <div>
        <Text text="Lösning baserat på biblioteket Tanstack Ranger " />
        <LinkComponent
          to="https://tanstack.com/ranger/latest/docs/quick-start"
          label={<Text text="Tanstack" type="secondary" />}
          target="_blank"
        />
      </div>
    </section>
  )
}
