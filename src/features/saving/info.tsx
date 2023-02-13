import { Component } from "solid-js"
import { saving } from "./store"

export const SavingInfo: Component = () => {
	return (
		<div>
			<p>${saving()?.amount ?? 0}</p>
		</div>
	)
}
