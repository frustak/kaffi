import { Component } from "solid-js"
import { Button } from "../../ui/simple"
import { expenses } from "../expense/store"
import { Expenses } from "../expense/types"
import { incomes } from "../income/store"
import { Incomes } from "../income/types"
import { saving } from "../saving/store"
import { Saving } from "../saving/types"
import { settings } from "../settings/store"
import { Settings } from "../settings/types"

export const ExportButton: Component = () => {
	return <Button onClick={copyToClipboard}>Sync To Clipboard</Button>
}

const copyToClipboard = () => {
	const data: SyncData = {
		incomes: incomes(),
		expenses: expenses(),
		saving: saving(),
		settings: settings(),
	}
	const serialized = JSON.stringify(data)
	navigator.clipboard.writeText(serialized)
}

export type SyncData = {
	incomes: Incomes | null
	expenses: Expenses | null
	saving: Saving | null
	settings: Settings | null
}
