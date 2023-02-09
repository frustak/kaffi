import { Component } from "solid-js"
import { ExpenseList } from "./features/expense"
import { IncomeList } from "./features/income"
import { Layout } from "./ui"

export const App: Component = () => {
	return (
		<Layout>
			<IncomeList />
			<ExpenseList />
		</Layout>
	)
}
