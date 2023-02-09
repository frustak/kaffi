import { createForm, Form, reset, zodForm } from "@modular-forms/solid"
import { nanoid } from "nanoid"
import { Component } from "solid-js"
import { z } from "zod"
import { InputField } from "../../ui/compound"
import { Button } from "../../ui/simple"
import { addIncome } from "./store"

export const IncomeForm: Component = () => {
	return (
		<Form of={incomeForm} onSubmit={submitForm} class="flex justify-between items-center">
			<div>
				<InputField
					of={incomeForm}
					name="amount"
					label="Amount"
					placeholder="Amount"
					type="number"
					required
				/>
				<InputField
					of={incomeForm}
					name="description"
					label="Description"
					placeholder="Description"
					type="text"
				/>
			</div>
			<Button type="submit">Add</Button>
		</Form>
	)
}

const incomeSchema = z.object({
	amount: z.number(),
	description: z.string(),
})

type IncomeInput = z.infer<typeof incomeSchema>

const incomeForm = createForm<IncomeInput>({
	validate: zodForm(incomeSchema),
	initialValues: {
		amount: undefined,
		description: "",
	},
})

const submitForm = (values: IncomeInput) => {
	addIncome({
		...values,
		id: nanoid(),
		date: new Date(),
	})
	reset(incomeForm)
}
