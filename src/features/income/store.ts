import { createStorageSignal } from "@solid-primitives/storage"
import { Income, Incomes } from "./types"

const deserializeIncomes = (value: string) =>
	JSON.parse(value).map((income) => ({
		...income,
		date: new Date(income.date),
	}))

const [incomes, setIncomes] = createStorageSignal<Incomes>("incomes", [], {
	serializer: (value) => JSON.stringify(value),
	deserializer: deserializeIncomes,
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

export { incomes, setIncomes, addIncome, removeIncome, deserializeIncomes }
