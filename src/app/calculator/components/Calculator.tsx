import { useState } from 'react'
import { NumberInputComponent } from '../../../shared/components/inputs/NumberInput'

import { PrimaryButton } from '../../../shared/components/buttons/PrimaryButton'

import './Calculator.css'
import { amountConfig, durationConfig } from '../services/calulator-service'

export const CalculatorComponent = () => {
  const [loanAmount, setLoanAmount] = useState(0)
  const [loanDuration, setLoanDuration] = useState(0)
  return (
    <div className="calculator__content">
      <NumberInputComponent
        label="Lånebelopp"
        name="loanAmount"
        onChange={setLoanAmount}
        value={loanAmount}
        size="max"
        inputType="range"
        min={amountConfig.min}
        max={amountConfig.max}
        step={amountConfig.step}
      />

      <NumberInputComponent
        label="Lånetid"
        name="loanDuration"
        size="max"
        inputType="range"
        min={durationConfig.min}
        max={durationConfig.max}
        step={durationConfig.step}
        onChange={setLoanDuration}
        value={loanDuration}
      />
      <div className="calculator__footer">
        <PrimaryButton label="Till Ansökan" />
      </div>

      <div>current loan amount: {loanAmount}</div>
      <div>current loan duration: {loanDuration}</div>
    </div>
  )
}
