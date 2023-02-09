import { createForm, Form, reset, zodForm } from "@modular-forms/solid"
import { nanoid } from "nanoid"
import { Component } from "solid-js"
import { z } from "zod"
import { InputField } from "../../ui/compound"
import { Button } from "../../ui/simple"
import { addExpense } from "./store"

export const ExpenseForm: Component = () => {
	return (
		<Form of={expenseForm} onSubmit={submitForm} class="flex justify-between items-end">
			<div class="grow">
				<InputField
					of={expenseForm}
					name="amount"
					label="Amount"
					placeholder="Amount"
					type="number"
					required
				/>
				<InputField
					of={expenseForm}
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

const expenseSchema = z.object({
	amount: z.number(),
	description: z.string(),
})

type ExpenseInput = z.infer<typeof expenseSchema>

const expenseForm = createForm<ExpenseInput>({
	validate: zodForm(expenseSchema),
	initialValues: {
		amount: undefined,
		description: "",
	},
})

const submitForm = (values: ExpenseInput) => {
	addExpense({
		...values,
		id: nanoid(),
		date: new Date(),
	})
	reset(expenseForm)
}
