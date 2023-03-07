import { Component } from "solid-js"
import { Divider, Title } from "../../ui/simple"
import { ExportButton, ImportButton } from "../sync"
import { SettingsForm } from "./form"

export const SettingsSection: Component = () => {
	return (
		<div class="flex flex-col gap-6">
			<Title>Settings</Title>
			<SettingsForm />
			<Divider />
			<div class="flex justify-between items-center">
				<ExportButton />
				<ImportButton />
			</div>
		</div>
	)
}
