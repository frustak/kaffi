import _ from "lodash"
import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { formatCurrency } from "../../utils/currency"
import { expenses } from "../expense/store"
import { incomes } from "../income/store"

const balance = () => {
	const incomeSum = _.sumBy(incomes(), (income) => income.amount)
	const expenseSum = _.sumBy(expenses(), (expense) => expense.amount)
	return formatCurrency(incomeSum - expenseSum)
}

export const BalanceSection: Component = () => {
	return (
		<div class="flex justify-between items-center">
			<Title>Balance</Title>
			<h2 class="text-2xl">{balance()}</h2>
		</div>
	)
}
