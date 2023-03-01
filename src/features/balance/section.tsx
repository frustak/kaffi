import _ from "lodash"
import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { formatMoney } from "../../utils/currency"
import { expenses } from "../expense/store"
import { incomes } from "../income/store"

const balance = () => {
	const incomeSum = _.sumBy(incomes(), (income) => income.amount)
	const expenseSum = _.sumBy(expenses(), (expense) => expense.amount)
	return incomeSum - expenseSum
}

const sign = () => {
	const sum = balance()
	if (sum === 0) return ""
	if (sum > 0) return "+"
	if (sum < 0) return "-"
}

export const BalanceSection: Component = () => {
	return (
		<div class="flex justify-between items-center">
			<Title>Balance</Title>
			<h2
				class="text-2xl"
				classList={{
					"bg-brand-green/50": sign() === "+",
					"bg-brand-red/50": sign() === "-",
				}}
			>
				{formatMoney(balance())}
			</h2>
		</div>
	)
}
