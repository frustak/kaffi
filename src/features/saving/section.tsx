import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { SavingForm } from "./form"
import { SavingInfo } from "./info"

export const SavingSection: Component = () => {
	return (
		<div class="flex flex-col gap-6">
			<Title>Saving</Title>
			<SavingInfo />
			<SavingForm />
		</div>
	)
}
