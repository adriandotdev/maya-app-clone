import AdsList from "@/components/wallet/AdsList";
import AppItems from "@/components/wallet/AppItems";
import Footer from "@/components/wallet/Footer";
import Rewards from "@/components/wallet/Rewards";
import Transactions from "@/components/wallet/Transactions";
import WalletBalance from "@/components/wallet/WalletBalance";
import { ScrollView, StyleSheet } from "react-native";

export default function Home() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			{/* Wallet Balance Card */}
			<WalletBalance />

			{/* App List Items */}
			<AppItems />

			{/* Ads List */}
			<AdsList />

			{/* Transaction  */}
			<Transactions />

			{/* Rewards and Vouchers section */}
			<Rewards />

			<Footer />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	footerTitle: {
		fontSize: 24,
		fontWeight: 700,
		color: "#00a652",
	},
	header: {
		zIndex: 1,
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
	usernameContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	username: {
		fontSize: 20,
		fontWeight: "700",
	},
	iconsContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 24,
	},
	content: {
		padding: 24,
		paddingTop: 0,
	},
	item: {
		fontSize: 18,
		marginBottom: 12,
		backgroundColor: "#f0f0f0",
		padding: 12,
		borderRadius: 8,
	},
});
