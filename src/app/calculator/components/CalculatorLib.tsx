import { RangeSlider } from 'src/shared/components/inputs/RangeSlider'
import { Popover } from 'src/shared/components/popover/Popover'
import { MonthyCostExample } from './MonthyCostExample'
import { useState } from 'react'
import { MonthlyCost } from '../models/monthly-cost'
import './CalculatorLib.css'

export const CalcluatorLib = () => {
  const [cost] = useState<MonthlyCost>(() => ({
    monthlyCost: 0,
    monthyInterest: 0
  }))
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
        <RangeSlider />
      </Popover>
    </div>
  )
}
