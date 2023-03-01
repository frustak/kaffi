import { Component } from "solid-js"
import { Title } from "../../ui/simple"
import { SettingsForm } from "./form"

export const SettingsSection: Component = () => {
	return (
		<div class="flex flex-col gap-6">
			<Title>Settings</Title>
			<SettingsForm />
		</div>
	)
}
