export type TransactionType = "receiving" | "outgoing";

export type Transaction = {
	descripton: string;
	entity: string;
	time: string;
	amount: number;
	type: TransactionType;
};
