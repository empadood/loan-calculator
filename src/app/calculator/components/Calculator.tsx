import { useState } from 'react'
import { NumberInputComponent } from '../../../shared/components/inputs/NumberInput'

import { PrimaryButton } from '../../../shared/components/buttons/PrimaryButton'

import './Calculator.css'
import {
  amountConfig,
  calculateMonthlyCost,
  durationConfig
} from '../services/calulator-service'
import { Popover } from '../../../shared/components/popover/Popover'
import { Example } from './Example'
import { Loan } from '../models/loan'
import { MonthlyCost } from '../models/monthly-cost'

export const CalculatorComponent = () => {
  const [loan, setLoan] = useState<Loan>(() => ({
    amount: amountConfig.min,
    durationInYears: durationConfig.min
  }))
  const [cost, setCost] = useState<MonthlyCost>(() => ({
    monthlyCost: 0,
    monthyInterest: 0
  }))

  const [showPopover] = useState(true)

  const onChange = (loan: Loan) => {
    setCost(calculateMonthlyCost(loan))
    setLoan(loan)
  }

  const onOutSideClick = () => {
    return
  }

  return (
    <div className="calculator__content">
      <Popover
        targetId="example-popover"
        content={<Example cost={cost.monthlyCost} />}
        offsetX={0}
        offsetY={-90}
        visible={showPopover}
        onOutsideClick={onOutSideClick}
      >
        <NumberInputComponent
          label="Lånebelopp"
          name="loanAmount"
          onChange={(value) => onChange({ ...loan, amount: value })}
          value={loan.amount}
          size="max"
          inputType="range"
          min={amountConfig.min}
          max={amountConfig.max}
          step={amountConfig.step}
        />
      </Popover>

      <NumberInputComponent
        label="Lånetid"
        name="loanDuration"
        size="max"
        inputType="range"
        min={durationConfig.min}
        max={durationConfig.max}
        step={durationConfig.step}
        onChange={(value) => onChange({ ...loan, durationInYears: value })}
        value={loan.durationInYears}
      />
      <div className="calculator__footer">
        <PrimaryButton label="Till Ansökan" />
      </div>

      <div>current loan amount: {loan.amount}</div>
      <div>current loan duration: {loan.durationInYears}</div>
      <div>monthly cost: {cost.monthlyCost}</div>
      <div>monthly interest: {cost.monthyInterest}</div>
    </div>
  )
}
