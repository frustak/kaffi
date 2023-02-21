import { formatRelative } from "date-fns"
import { Component } from "solid-js"
import { Button } from "../../ui/simple"
import { formatCurrency } from "../../utils/currency"
import { removeExpense } from "./store"
import { Expense } from "./types"

export const ExpenseItem: Component<{ expense: Expense }> = (props) => {
	const handleRemove = () => removeExpense(props.expense)

	return (
		<div class="flex justify-between">
			<div class="flex flex-col gap-1">
				<p>{formatCurrency(props.expense.amount)}</p>
				<p class="text-sm">{props.expense.description}</p>
			</div>
			<div class="flex flex-col items-end gap-1">
				<p class="text-xs text-brand-text/70">
					{formatRelative(props.expense.date, new Date())}
				</p>
				<Button onClick={handleRemove}>Delete</Button>
			</div>
		</div>
	)
}
