import { Component } from "solid-js"
import { BalanceSection } from "./features/balance"
import { ExpenseSection } from "./features/expense"
import { IncomeSection } from "./features/income"
import { Divider, Layout } from "./ui/simple"

export const App: Component = () => {
	return (
		<Layout>
			<div class="flex flex-col gap-10">
				<BalanceSection />
				<Divider />
				<IncomeSection />
				<Divider />
				<ExpenseSection />
			</div>
		</Layout>
	)
}
