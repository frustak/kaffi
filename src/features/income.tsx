import { createForm, Form, reset, zodForm } from "@modular-forms/solid"
import { createStorageSignal } from "@solid-primitives/storage"
import { formatRelative } from "date-fns"
import { nanoid } from "nanoid"
import { Component, For, Show } from "solid-js"
import { z } from "zod"
import { InputField } from "../ui/compound"
import { Button, Divider, Title } from "../ui/simple"

export const IncomeSection: Component = () => {
	return (
		<div>
			<Title>Income</Title>
			<IncomeList />
			<Divider />
			<IncomeForm />
		</div>
	)
}

type Income = {
	id: string
	amount: number
	date: Date
	source?: string
}

const [incomes, setIncomes] = createStorageSignal<Income[]>("incomes", [], {
	serializer: (value) => JSON.stringify(value),
	deserializer: (value) =>
		JSON.parse(value).map((income) => ({
			...income,
			date: new Date(income.date),
		})),
})

const addIncome = (income: Income) => {
	setIncomes((incomes) => {
		if (!incomes) return [income]
		return [...incomes, income]
	})
}

const removeIncome = (target: Income) => {
	setIncomes((incomes) => incomes?.filter((income) => income.id !== target.id) ?? null)
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

const IncomeList: Component = () => {
	return (
		<div class="flex flex-col gap-4">
			<For
				fallback={<p class="text-sm">You have not added any income yet!</p>}
				each={incomes()}
			>
				{(income) => <IncomeItem income={income} />}
			</For>
		</div>
	)
}

const submitForm = (values: IncomeInput) => {
	addIncome({
		...values,
		id: nanoid(),
		date: new Date(),
	})
	reset(incomeForm)
}

const IncomeForm: Component = () => {
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

const IncomeItem: Component<{ income: Income }> = (props) => {
	const handleRemove = () => removeIncome(props.income)

	return (
		<div class="flex items-center justify-between leading-loose">
			<div>
				<p>${props.income.amount}</p>
				<p class="text-xs text-brand-text/70">
					{formatRelative(props.income.date, new Date())}
				</p>
				<Show when={props.income.source}>
					<p class="text-sm">
						<span class="font-600">Source</span> - {props.income.source}
					</p>
				</Show>
			</div>
			<Button onClick={handleRemove}>Delete</Button>
		</div>
	)
}
