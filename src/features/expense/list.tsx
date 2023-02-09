import { Component, For } from "solid-js"
import { ExpenseItem } from "./item"
import { expenses } from "./store"

export const ExpenseList: Component = () => {
	return (
		<div class="flex flex-col gap-4">
			<For
				fallback={<p class="text-sm">You have not added any expense yet!</p>}
				each={expenses()}
			>
				{(expense) => <ExpenseItem expense={expense} />}
			</For>
		</div>
	)
}
