import { Component } from "solid-js"
import { Divider, Title } from "../../ui/simple"
import { IncomeForm } from "./form"
import { IncomeList } from "./list"

export const IncomeSection: Component = () => {
	return (
		<div>
			<Title>Income</Title>
			<IncomeList />
			<Divider />
			<IncomeForm />
		</div>
	)
}
