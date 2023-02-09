import { Component, For } from "solid-js"
import { IncomeItem } from "./item"
import { incomes } from "./store"

export const IncomeList: Component = () => {
	return (
		<div class="flex flex-col gap-4">
			<For
				fallback={<p class="text-sm">You have not added any income yet!</p>}
				each={incomes()}
			>
				{(income) => <IncomeItem income={income} />}
			</For>
		</div>
	)
}
