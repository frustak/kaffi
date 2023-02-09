import { createForm, Field, Form, reset, zodForm } from "@modular-forms/solid"
import { createStorageSignal } from "@solid-primitives/storage"
import { formatRelative } from "date-fns"
import { nanoid } from "nanoid"
import { Component, For, Show } from "solid-js"
import { z } from "zod"
import { Button, Input, Title } from "../ui"

type Income = {
	id: string
	amount: number
	date: Date
	source?: string
}

const [incomes, setIncomes] = createStorageSignal<Income[]>("incomes", [], {
	serializer: (value) => JSON.stringify(value),
	deserializer: (value) =>
		JSON.parse(value).map((income) => ({ ...income, date: new Date(income.date) })),
})

const addIncome = (income: Income) => {
	setIncomes((incomes) => {
		if (!incomes) return [income]
		return [...incomes, income]
	})
}

const removeIncome = (income: Income) => {
	setIncomes((incomes) => incomes?.filter((i) => i.id !== income.id) ?? null)
}

export const IncomeList: Component = () => {
	const incomeSchema = z.object({ amount: z.number(), source: z.string() })
	type Income = z.infer<typeof incomeSchema>
	const incomeForm = createForm<Income>({
		validate: zodForm(incomeSchema),
		initialValues: {
			amount: undefined,
			source: "",
		},
	})

	return (
		<div>
			<Title>Income</Title>
			<div class="flex flex-col gap-4">
				<For each={incomes()}>{(income) => <IncomeItem income={income} />}</For>
			</div>
			<hr class="border-0 bg-brand-text/50 h-px my-10" />
			<Form
				of={incomeForm}
				class="flex flex-col gap-1 items-start"
				onSubmit={(values) => {
					addIncome({ ...values, id: nanoid(), date: new Date() })
					reset(incomeForm)
				}}
			>
				<Field of={incomeForm} name="amount">
					{(field) => (
						<Input
							{...field.props}
							placeholder="Income"
							type="number"
							value={field.value}
							required
						/>
					)}
				</Field>
				<Field of={incomeForm} name="source">
					{(field) => (
						<Input
							{...field.props}
							placeholder="Source"
							type="text"
							value={field.value}
						/>
					)}
				</Field>
				<Button type="submit" class="self-end">
					Add
				</Button>
			</Form>
		</div>
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
