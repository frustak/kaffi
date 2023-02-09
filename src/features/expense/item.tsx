import { formatRelative } from "date-fns"
import { Component } from "solid-js"
import { Button } from "../../ui/simple"
import { removeExpense } from "./store"
import { Expense } from "./types"

export const ExpenseItem: Component<{ expense: Expense }> = (props) => {
	const handleRemove = () => removeExpense(props.expense)

	return (
		<div class="flex items-center justify-between leading-loose">
			<div>
				<p>${props.expense.amount}</p>
				<p class="text-xs text-brand-text/70">
					{formatRelative(props.expense.date, new Date())}
				</p>
				<p class="text-sm">{props.expense.description}</p>
			</div>
			<Button onClick={handleRemove}>Delete</Button>
		</div>
	)
}
