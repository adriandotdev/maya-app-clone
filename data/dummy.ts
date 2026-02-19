import { Transaction } from "@/utils/types";
import { Landmark, PartyPopper } from "lucide-react-native";

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
		icon: PartyPopper,
		label: "Raffle",
	},
	{
		icon: Landmark,
		label: "Crypto",
	},
	{
		icon: PartyPopper,
		label: "Refer & Earn",
	},
	{
		icon: Landmark,
		label: "Bank Transfer",
	},
	{
		icon: PartyPopper,
		label: "Raffle",
	},
	{
		icon: Landmark,
		label: "Crypto",
	},
	{
		icon: PartyPopper,
		label: "Refer & Earn",
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
