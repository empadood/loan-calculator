import { useState } from 'react'

import './Calculator.css'
import {
  amountConfig,
  durationConfig,
  formatCost
} from '../services/calulator-service'

import { MonthyCostExample } from './MonthyCostExample'
import { Loan } from '../models/loan'
import { Popover } from 'src/shared/components/popover/Popover'
import { NumberInputComponent } from 'src/shared/components/inputs/NumberInput'
import { PrimaryButton } from 'src/shared/components/buttons/PrimaryButton'
import { useCostState } from '../hooks/useCost'

interface CalculatorProps {
  onApplyForLoan: (loan: Loan) => void
}
export const CalculatorComponent = ({ onApplyForLoan }: CalculatorProps) => {
  const { loan, cost, onChange } = useCostState()

  const [showPopover] = useState(true)

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
