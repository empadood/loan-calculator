import { RangeSlider } from 'src/shared/components/inputs/RangeSlider'
import { Popover } from 'src/shared/components/popover/Popover'
import { MonthyCostExample } from './MonthyCostExample'

import './CalculatorLib.css'
import { Loan } from '../models/loan'
import {
  amountConfig,
  durationConfig,
  formatCost
} from '../services/calulator-service'

import { PrimaryButton } from 'src/shared/components/buttons/PrimaryButton'
import { useCostState } from '../hooks/useCost'
import { useState } from 'react'

interface CalculatorLibProps {
  onApply: (loan: Loan) => void
}
export const CalcluatorLib = ({ onApply }: CalculatorLibProps) => {
  const { loan, cost, onChange } = useCostState()
  const [showPopover] = useState(true)

  return (
    <div className="calculator-lib__content">
      <Popover
        targetId="example-popover"
        offsetX={0}
        offsetY={-90}
        visible={showPopover}
        content={<MonthyCostExample cost={cost.monthlyCost} />}
      >
        <RangeSlider
          label="Lånebelopp"
          size="max"
          min={amountConfig.min}
          max={amountConfig.max}
          step={amountConfig.step}
          name="loanAmount"
          valueFormatter={formatCost}
          value={loan.amount}
          onChange={(val) => {
            onChange({
              ...loan,
              amount: val
            })
          }}
        />
      </Popover>

      <RangeSlider
        label="Lånetid"
        size="max"
        maxSuffix="år"
        name="loanDuration"
        min={durationConfig.min}
        max={durationConfig.max}
        step={durationConfig.step}
        value={loan.durationInYears}
        onChange={(val) => {
          onChange({
            ...loan,
            durationInYears: val
          })
        }}
      />
      <div className="calculator-lib__footer">
        <PrimaryButton label="Till ansökan" onClick={() => onApply(loan)} />
      </div>
    </div>
  )
}
