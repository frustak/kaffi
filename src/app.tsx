import { Component } from "solid-js"
import { IncomeList } from "./features/income"
import { Layout } from "./ui"

export const App: Component = () => {
	return (
		<Layout>
			<IncomeList />
		</Layout>
	)
}
