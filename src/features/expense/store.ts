import { createStorageSignal } from "@solid-primitives/storage"
import { Expense, Expenses } from "./types"

const deserializeExpenses = (value: string) =>
	JSON.parse(value).map((expense) => ({
		...expense,
		date: new Date(expense.date),
	}))

const [expenses, setExpenses] = createStorageSignal<Expenses>("expenses", [], {
	serializer: (value) => JSON.stringify(value),
	deserializer: deserializeExpenses,
})

const addExpense = (expense: Expense) => {
	setExpenses((expenses) => {
		if (!expenses) return [expense]
		return [...expenses, expense]
	})
}

const removeExpense = (target: Expense) => {
	setExpenses((expenses) => expenses?.filter((expense) => expense.id !== target.id) ?? null)
}

export { expenses, setExpenses, addExpense, removeExpense, deserializeExpenses }
