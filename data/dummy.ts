import { Transaction } from "@/utils/types";
import {
	CardSim,
	Ellipsis,
	Gem,
	HeartHandshake,
	Landmark,
	PhilippinePeso,
	ReceiptText,
	ScanEye,
} from "lucide-react-native";

export const headerItems = [
	{
		label: "Wallet",
		href: "/home",
	},
	{
		label: "Savings",
		href: "/savings",
	},
	{
		label: "Credit",
		href: "/credit",
	},
	{
		label: "Loans",
		href: "/loans",
	},
	{
		label: "Cards",
		href: "/cards",
	},
];

export const appListItems = [
	{
		icon: Landmark,
		label: "Bank Transfer",
	},
	{
		icon: PhilippinePeso,
		label: "Raffle Promo",
	},
	{
		icon: Gem,
		label: "Crypto",
	},
	{
		icon: HeartHandshake,
		label: "Refer & Earn",
	},
	{
		icon: CardSim,
		label: "Load",
	},
	{
		icon: ReceiptText,
		label: "Bills",
	},
	{
		icon: ScanEye,
		label: "PBB",
	},
	{
		icon: Ellipsis,
		label: "More",
	},
];

export const transactions: Transaction[] = [
	{
		descripton: "Bills Payment for",
		entity: "Meralco",
		time: "1 hour ago",
		amount: 2500,
		type: "outgoing",
	},
	{
		descripton: "Received money from",
		entity: "Maribank",
		time: "2 hours ago",
		amount: 20500,
		type: "receiving",
	},
	{
		descripton: "Bills Payment for",
		entity: "Atome",
		time: "3 hours ago",
		amount: 2500,
		type: "outgoing",
	},
	{
		descripton: "Bills Payment for",
		entity: "Atome",
		time: "3 hours ago",
		amount: 2500,
		type: "outgoing",
	},
	{
		descripton: "Received money from",
		entity: "Metrobank",
		time: "4 hour ago",
		amount: 12500,
		type: "receiving",
	},
];

export const tabs: string[] = ["wallet", "savings", "credit", "loans", "cards"];
