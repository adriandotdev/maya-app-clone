import { Transaction } from "@/utils/types";
import {
	AnchorIcon,
	ArrowDownLeft,
	ArrowUpRight,
	BaggageClaim,
	Building2Icon,
	CardSim,
	ChartLine,
	CoinsIcon,
	CreditCard,
	Diamond,
	Dice2,
	Dice5,
	Ellipsis,
	EyeIcon,
	FishIcon,
	FlagIcon,
	Gem,
	GiftIcon,
	Globe2Icon,
	HandshakeIcon,
	HeartHandshake,
	Landmark,
	LeafyGreen,
	LucideIcon,
	MapPinIcon,
	PhilippinePeso,
	PhilippinePesoIcon,
	Phone,
	PiggyBank,
	ReceiptText,
	ScanEye,
	ScanQrCode,
	Shield,
	ShoppingBasket,
	StoreIcon,
	TagIcon,
	Target,
	TicketIcon,
	Timer,
	VideoIcon,
} from "lucide-react-native";

export const headerItems = [
	{
		label: "Wallet",
		href: "/wallet",
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

export const secureBankingItems = [
	{
		icon: CreditCard,
		label: "Credit cards",
	},
	{
		icon: Dice2,
		label: "Easy Credit",
	},
	{
		icon: PiggyBank,
		label: "Savings",
	},
	{
		icon: Target,
		label: "Personal Goals",
	},
	{
		icon: PhilippinePeso,
		label: "Personal Loans",
	},
	{
		icon: Timer,
		label: "Time Deposit Plan",
	},
	{
		icon: CardSim,
		label: "Wallet cards",
	},
];

export const shopAndPlayItems = [
	{
		icon: Phone,
		label: "Load",
	},
	{
		icon: BaggageClaim,
		label: "Shop",
	},
	{
		icon: ReceiptText,
		label: "Bills",
	},
	{
		icon: Dice5,
		label: "Games",
	},
	{
		icon: VideoIcon,
		label: "Stream",
	},
	{
		icon: CardSim,
		label: "eSIM",
	},
	{
		icon: PhilippinePesoIcon,
		label: "Raffle Promo",
	},
	{
		icon: EyeIcon,
		label: "PBB",
	},
];

export const growMoneyItems = [
	{
		icon: Diamond,
		label: "Crypto",
	},
	{
		icon: LeafyGreen,
		label: "Funds",
	},
	{
		icon: ChartLine,
		label: "Stocks",
	},
	{
		icon: Shield,
		label: "Insurance",
	},
];

export const doMoreItems = [
	{
		icon: Globe2Icon,
		label: "Global remittance",
	},
	{
		icon: Building2Icon,
		label: "Gov't",
	},
	{
		icon: MapPinIcon,
		label: "Travel",
	},
	{
		icon: FishIcon,
		label: "Food",
	},
	{
		icon: StoreIcon,
		label: "Partners",
	},
	{
		icon: ShoppingBasket,
		label: "Retail",
	},
	{
		icon: AnchorIcon,
		label: "PAL",
	},
];

export const earnRewardsItems = [
	{
		icon: HandshakeIcon,
		label: "Refer & Earn",
	},
	{
		icon: FlagIcon,
		label: "Missions",
	},
	{
		icon: TicketIcon,
		label: "Voucher",
	},
	{
		icon: TagIcon,
		label: "Deals",
	},
	{
		icon: GiftIcon,
		label: "Cashback rewards",
	},
];

export const mainServices: { icon: LucideIcon; label: string }[] = [
	{
		icon: ArrowDownLeft,
		label: "Cash in",
	},
	{
		icon: ArrowUpRight,
		label: "Send Money",
	},
	{
		icon: PiggyBank,
		label: "Bank Transfer",
	},
	{
		icon: CoinsIcon,
		label: "Request Money",
	},
	{
		icon: ScanQrCode,
		label: "Pay with QR",
	},
];
