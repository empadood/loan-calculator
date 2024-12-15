import { useEffect, useState } from 'react'
import { Loan } from '../models/loan'
import { MonthlyCost } from '../models/monthly-cost'
import {
  amountConfig,
  calculateMonthlyCost,
  durationConfig
} from '../services/calulator-service'

const useCostState = () => {
  const [loan, setLoan] = useState<Loan>(() => ({
    amount: amountConfig.min,
    durationInYears: durationConfig.min
  }))
  const [cost, setCost] = useState<MonthlyCost>(() => ({
    monthlyCost: 0,
    monthyInterest: 0
  }))

  useEffect(() => {
    setCost(calculateMonthlyCost(loan))
  }, [])

  const onChange = (loan: Loan) => {
    setCost(calculateMonthlyCost(loan))
    setLoan(loan)
  }
  return { loan, cost, onChange }
}

export { useCostState }
