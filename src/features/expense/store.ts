import { createStorageSignal } from "@solid-primitives/storage"
import { Expense } from "./types"

const [expenses, setExpenses] = createStorageSignal<Expense[]>("expenses", [], {
	serializer: (value) => JSON.stringify(value),
	deserializer: (value) =>
		JSON.parse(value).map((expense) => ({
			...expense,
			date: new Date(expense.date),
		})),
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

export { expenses, addExpense, removeExpense }
