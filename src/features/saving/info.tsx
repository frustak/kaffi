import { Component } from "solid-js"
import { formatMoney } from "../../utils/currency"
import { saving } from "./store"

export const SavingInfo: Component = () => {
	return (
		<div>
			<p>{formatMoney(saving()?.amount ?? 0)}</p>
		</div>
	)
}
