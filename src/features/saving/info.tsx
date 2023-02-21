import { Component } from "solid-js"
import { formatCurrency } from "../../utils/currency"
import { saving } from "./store"

export const SavingInfo: Component = () => {
	return (
		<div>
			<p>{formatCurrency(saving()?.amount ?? 0)}</p>
		</div>
	)
}
