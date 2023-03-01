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

function currencySign() {
	let formatted = "$"
	try {
		formatted =
			Intl.NumberFormat("en-US", {
				style: "currency",
				currency: settings()?.currency ?? "USD",
				maximumFractionDigits: 0,
			})
				.formatToParts(0)
				.find((part) => part.type === "currency")?.value ?? "$"
	} catch (error) {
		formatted = "$"
	}
	return formatted
}

export { formatMoney, currencySign }
