import { useState } from 'react'

import './Calculator.css'
import {
  amountConfig,
  calculateMonthlyCost,
  durationConfig,
  formatCost
} from '../services/calulator-service'

import { MonthyCostExample } from './MonthyCostExample'
import { Loan } from '../models/loan'
import { MonthlyCost } from '../models/monthly-cost'
import { Popover } from 'src/shared/components/popover/Popover'
import { NumberInputComponent } from 'src/shared/components/inputs/NumberInput'
import { PrimaryButton } from 'src/shared/components/buttons/PrimaryButton'

interface CalculatorProps {
  onApplyForLoan: (loan: Loan) => void
}
export const CalculatorComponent = ({ onApplyForLoan }: CalculatorProps) => {
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

  return (
    <div className="calculator__content">
      <Popover
        targetId="popover"
        content={<MonthyCostExample cost={cost.monthlyCost} />}
        offsetX={0}
        offsetY={-90}
        visible={showPopover}
      >
        <NumberInputComponent
          label="Lånebelopp"
          name="loanAmount"
          onChange={(value) => onChange({ ...loan, amount: value })}
          value={loan.amount}
          size="max"
          maxSuffix="kr"
          inputType="range"
          min={amountConfig.min}
          max={amountConfig.max}
          step={amountConfig.step}
          valueFormatter={formatCost}
        />
      </Popover>

      <NumberInputComponent
        label="Lånetid"
        name="loanDuration"
        size="max"
        inputType="range"
        maxSuffix="år"
        min={durationConfig.min}
        max={durationConfig.max}
        step={durationConfig.step}
        onChange={(value) => onChange({ ...loan, durationInYears: value })}
        value={loan.durationInYears}
      />
      <div className="calculator__footer">
        <PrimaryButton
          label="Till ansökan"
          onClick={() => onApplyForLoan(loan)}
        />
      </div>
    </div>
  )
}
