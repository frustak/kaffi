import { createStorageSignal } from "@solid-primitives/storage"
import { Income } from "./types"

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

export { incomes, addIncome, removeIncome }
