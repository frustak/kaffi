export type Expense = {
	id: string
	amount: number
	date: Date
	description: string
	category: string
}

export type Expenses = Expense[]
