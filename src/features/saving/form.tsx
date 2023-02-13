import { createForm, Form, reset, zodForm } from "@modular-forms/solid"
import { Component } from "solid-js"
import { z } from "zod"
import { InputField } from "../../ui/compound"
import { Button } from "../../ui/simple"
import { setSaving } from "./store"

export const SavingForm: Component = () => {
	return (
		<Form of={savingForm} onSubmit={submitForm} class="flex justify-between items-end">
			<div class="grow">
				<InputField
					of={savingForm}
					name="amount"
					label="Amount"
					placeholder="Amount"
					type="number"
					required
				/>
			</div>
			<Button type="submit">Set</Button>
		</Form>
	)
}

const savingSchema = z.object({
	amount: z.number(),
})

type SavingInput = z.infer<typeof savingSchema>

const savingForm = createForm<SavingInput>({
	validate: zodForm(savingSchema),
	initialValues: {
		amount: undefined,
	},
})

const submitForm = (values: SavingInput) => {
	setSaving(values)
	reset(savingForm)
}
