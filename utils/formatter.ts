export const formatToCurrency = (amount: number, currency = "PHP") => {
	return amount.toLocaleString("en-PH", {
		style: "currency",
		currency,
	});
};
