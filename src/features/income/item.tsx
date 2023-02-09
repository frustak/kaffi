import { formatRelative } from "date-fns"
import { Component } from "solid-js"
import { Button } from "../../ui/simple"
import { removeIncome } from "./store"
import { Income } from "./types"

export const IncomeItem: Component<{ income: Income }> = (props) => {
	const handleRemove = () => removeIncome(props.income)

	return (
		<div class="flex items-center justify-between leading-loose">
			<div>
				<p>${props.income.amount}</p>
				<p class="text-xs text-brand-text/70">
					{formatRelative(props.income.date, new Date())}
				</p>
				<p class="text-sm">{props.income.description}</p>
			</div>
			<Button onClick={handleRemove}>Delete</Button>
		</div>
	)
}
