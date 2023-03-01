import { createForm, Form, zodForm } from "@modular-forms/solid"
import { Component } from "solid-js"
import { z } from "zod"
import { InputField } from "../../ui/compound"
import { Anchor, Button } from "../../ui/simple"
import { setSettings, settings } from "./store"

export const SettingsForm: Component = () => {
	return (
		<Form of={settingsForm} onSubmit={submitForm} class="flex justify-between items-end">
			<div class="grow flex flex-col gap-2">
				<InputField
					of={settingsForm}
					name="currency"
					label="Currency"
					placeholder="Currency"
					type="text"
					required
				/>
				<Anchor href="https://www.iban.com/currency-codes" class="self-start">
					Currency codes
				</Anchor>
			</div>
			<Button type="submit">Save</Button>
		</Form>
	)
}

const settingsSchema = z.object({
	currency: z.string(),
})

type SettingsInput = z.infer<typeof settingsSchema>

const settingsForm = createForm<SettingsInput>({
	validate: zodForm(settingsSchema),
	initialValues: {
		currency: settings()?.currency,
	},
})

const submitForm = (values: SettingsInput) => {
	setSettings(values)
}
