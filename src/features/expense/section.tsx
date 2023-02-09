import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { ExpenseForm } from "./form"
import { ExpenseList } from "./list"

export const ExpenseSection: Component = () => {
	return (
		<div class="flex flex-col gap-6">
			<Title>Expense</Title>
			<ExpenseList />
			<ExpenseForm />
		</div>
	)
}
