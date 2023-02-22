import { formatRelative } from "date-fns"
import { Component } from "solid-js"
import { Button } from "../../ui/simple"
import { formatCurrency } from "../../utils/currency"
import { removeIncome } from "./store"
import { Income } from "./types"

export const IncomeItem: Component<{ income: Income }> = (props) => {
	const handleRemove = () => removeIncome(props.income)

	return (
		<div class="flex justify-between">
			<div class="flex flex-col gap-1">
				<p class="bg-brand-green/50">{formatCurrency(props.income.amount)}</p>
				<p class="text-sm">{props.income.description}</p>
			</div>
			<div class="flex flex-col items-end gap-1">
				<p class="text-xs text-brand-text/70">
					{formatRelative(props.income.date, new Date())}
				</p>
				<Button onClick={handleRemove}>Delete</Button>
			</div>
		</div>
	)
}
