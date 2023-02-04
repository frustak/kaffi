import { createForm, Field, Form, reset, zodForm } from "@modular-forms/solid"
import { createStorageSignal } from "@solid-primitives/storage"
import clsx from "clsx"
import { formatRelative } from "date-fns"
import { nanoid } from "nanoid"
import { Component, ComponentProps, For, ParentComponent } from "solid-js"
import { z } from "zod"

export const App: Component = () => {
	return (
		<Layout>
			<IncomeList />
		</Layout>
	)
}

type Income = {
	id: string
	amount: number
	date: Date
	from?: string
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

const IncomeList: Component = () => {
	const incomeSchema = z.object({ amount: z.number(), date: z.string(), from: z.string() })
	type Income = z.infer<typeof incomeSchema>
	const incomeForm = createForm<Income>({
		validate: zodForm(incomeSchema),
		initialValues: {
			amount: undefined,
			date: new Date().toISOString(),
			from: "",
		},
	})

	return (
		<div>
			<Title>Income</Title>
			<div class="flex flex-col gap-4">
				<For each={incomes()}>{(income) => <IncomeItem income={income} />}</For>
			</div>
			<Form
				of={incomeForm}
				class="flex flex-col gap-1 mt-4 items-start"
				onSubmit={(values) => {
					addIncome({ ...values, id: nanoid(), date: new Date(values.date) })
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
				<Field of={incomeForm} name="from">
					{(field) => (
						<Input
							{...field.props}
							placeholder="Where from"
							type="text"
							value={field.value}
						/>
					)}
				</Field>
				<Field of={incomeForm} name="date">
					{(field) => (
						<Input
							{...field.props}
							placeholder="Date"
							type="date"
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
				<p class="text-sm">
					<span class="font-600">From</span> {props.income.from}
				</p>
			</div>
			<Button onClick={handleRemove}>Delete</Button>
		</div>
	)
}

const Layout: ParentComponent = (props) => (
	<main class="font-body text-brand-text bg-brand-secondary/10 min-h-screen">
		<div class="max-w-prose mx-auto pt-5xl">{props.children}</div>
	</main>
)

const Title: ParentComponent = (props) => <h1 class="text-5xl leading-loose">{props.children}</h1>

const Input: Component<ComponentProps<"input">> = (props) => (
	<input
		type="text"
		class="bg-transparent focus:outline-none border-none font-body text-brand-text text-base placeholder:text-brand-text/40"
		{...props}
	/>
)

const Button: Component<ComponentProps<"button">> = (props) => (
	<button
		{...props}
		class={clsx(
			"font-body border-none bg-transparent focus:outline-none text-lg cursor-pointer",
			props.class
		)}
	>
		{props.children}
	</button>
)
