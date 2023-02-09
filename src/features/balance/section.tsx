import _ from "lodash"
import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { expenses } from "../expense/store"
import { incomes } from "../income/store"

const balance = () => {
	const incomeSum = _.sumBy(incomes(), (income) => income.amount)
	const expenseSum = _.sumBy(expenses(), (expense) => expense.amount)

	return {
		amount: Math.abs(incomeSum - expenseSum),
		sign: incomeSum === expenseSum ? "" : incomeSum > expenseSum ? "+" : "-",
	}
}

export const BalanceSection: Component = () => {
	return (
		<div class="flex justify-between items-center">
			<Title>Balance</Title>
			<h2 class="text-2xl">
				{balance().sign}${balance().amount}
			</h2>
		</div>
	)
}
