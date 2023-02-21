function formatCurrency(value: number) {
	return Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value)
}

export { formatCurrency }
