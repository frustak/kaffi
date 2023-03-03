import { createForm, Form, reset, zodForm } from "@modular-forms/solid"
import { nanoid } from "nanoid"
import { Component } from "solid-js"
import { z } from "zod"
import { InputField, SelectField } from "../../ui/compound"
import { Button } from "../../ui/simple"
import { currencySign } from "../../utils/currency"
import { addExpense } from "./store"

export const ExpenseForm: Component = () => {
	return (
		<Form of={expenseForm} onSubmit={submitForm} class="flex justify-between items-end">
			<div class="grow flex flex-col gap-2">
				<InputField
					of={expenseForm}
					name="amount"
					label="Amount"
					placeholder="Amount"
					type="number"
					required
					icon={<span class="text-brand-text/50">{currencySign()}</span>}
				/>
				<InputField
					of={expenseForm}
					name="description"
					label="Description"
					placeholder="Description"
					type="text"
				/>
				<SelectField
					of={expenseForm}
					name="category"
					label="Category"
					options={[
						"Food",
						"Health",
						"Insurance",
						"Rent",
						"Transport",
						"Shopping",
						"Entertainment",
						"Other",
					]}
				/>
			</div>
			<Button type="submit">Add</Button>
		</Form>
	)
}

const expenseSchema = z.object({
	amount: z.number(),
	description: z.string(),
	category: z.string(),
})

type ExpenseInput = z.infer<typeof expenseSchema>

const expenseForm = createForm<ExpenseInput>({
	validate: zodForm(expenseSchema),
	initialValues: {
		amount: undefined,
		description: "",
		category: "Other",
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
