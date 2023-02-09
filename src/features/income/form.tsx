import { createForm, Form, reset, zodForm } from "@modular-forms/solid"
import { nanoid } from "nanoid"
import { Component } from "solid-js"
import { z } from "zod"
import { InputField } from "../../ui/compound"
import { Button } from "../../ui/simple"
import { addIncome } from "./store"

export const IncomeForm: Component = () => {
	return (
		<Form of={incomeForm} class="flex flex-col gap-1 items-start" onSubmit={submitForm}>
			<InputField of={incomeForm} name="amount" placeholder="Income" type="number" required />
			<InputField of={incomeForm} name="source" placeholder="Source" type="text" />
			<Button type="submit" class="self-end">
				Add
			</Button>
		</Form>
	)
}

const incomeSchema = z.object({
	amount: z.number(),
	source: z.string(),
})

type IncomeInput = z.infer<typeof incomeSchema>

const incomeForm = createForm<IncomeInput>({
	validate: zodForm(incomeSchema),
	initialValues: {
		amount: undefined,
		source: "",
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
