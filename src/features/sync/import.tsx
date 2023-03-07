import { Component } from "solid-js"
import { Button } from "../../ui/simple"
import { deserializeExpenses, setExpenses } from "../expense/store"
import { deserializeIncomes, setIncomes } from "../income/store"
import { setSaving } from "../saving/store"
import { setSettings } from "../settings/store"
import { SyncData } from "./export"

export const ImportButton: Component = () => {
	return <Button onClick={importFromClipboard}>Sync From Clipboard</Button>
}

const importFromClipboard = async () => {
	const data = await navigator.clipboard.readText()
	const temp = JSON.parse(data) as SyncData
	const deserialized: SyncData = {
		incomes: deserializeIncomes(JSON.stringify(temp.incomes)),
		expenses: deserializeExpenses(JSON.stringify(temp.expenses)),
		saving: temp.saving,
		settings: temp.settings,
	}
	setIncomes(deserialized.incomes)
	setExpenses(deserialized.expenses)
	setSaving(deserialized.saving)
	setSettings(deserialized.settings)
}
