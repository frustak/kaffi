import { Component } from "solid-js"
import { ExpenseList } from "./features/expense"
import { IncomeSection } from "./features/income"
import { Layout } from "./ui/simple"

export const App: Component = () => {
	return (
		<Layout>
			<IncomeSection />
			<ExpenseList />
		</Layout>
	)
}
