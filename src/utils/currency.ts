import { settings } from "../features/settings/store"

function formatMoney(value: number) {
	let formatted = value.toString()
	try {
		formatted = Intl.NumberFormat("en-US", {
			style: "currency",
			currency: settings()?.currency ?? "USD",
			maximumFractionDigits: 0,
		}).format(value)
	} catch (error) {
		formatted = Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0,
		}).format(value)
	}
	return formatted
}

export { formatMoney }
