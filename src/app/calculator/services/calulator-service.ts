import { Loan } from '../models/loan'
import { MonthlyCost } from '../models/monthly-cost'

const YEARLY_INTEREST_RATE = 9.9
const YEAR = 12 
const TO_PERCENTAGE = 100

const amountConfig = {
  min: 20000,
  max: 200000,
  step: 1000
}

const durationConfig = {
  min: 2,
  max: 10,
  step: 1
}

/**
 * Returns the monthly interest rate by dividing the yearly rate by 12
 * @param yearyRate e.g 12% => 0.12
 */
const calculateMonthlyInterestRate = (yearlyRate = YEARLY_INTEREST_RATE) =>  yearlyRate / YEAR / TO_PERCENTAGE

const calculateMonthlyCost = (loan: Loan): MonthlyCost => {
  const monthlyInterestRate = calculateMonthlyInterestRate(YEARLY_INTEREST_RATE)
  
  const numerator = loan.amount * monthlyInterestRate * ( Math.pow(1 + monthlyInterestRate, loan.durationInYears * 12))
  const denominator = Math.pow(1 + monthlyInterestRate, loan.durationInYears * 12) - 1


  return {
    monthlyCost: numerator / (denominator !== 0 ? denominator : 1),      
    monthyInterest: monthlyInterestRate
  }
}

export { amountConfig, durationConfig, calculateMonthlyCost }
