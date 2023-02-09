import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { IncomeForm } from "./form"
import { IncomeList } from "./list"

export const IncomeSection: Component = () => {
	return (
		<div class="flex flex-col gap-6">
			<Title>Income</Title>
			<IncomeList />
			<IncomeForm />
		</div>
	)
}
