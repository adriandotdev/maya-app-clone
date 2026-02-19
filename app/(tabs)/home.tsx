import AdsList from "@/components/core/AdsList";
import AppItems from "@/components/core/AppItems";
import FloatingNav from "@/components/core/FloatingNav";
import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import Rewards from "@/components/core/Rewards";
import Transactions from "@/components/core/Transactions";
import WalletBalance from "@/components/core/WalletBalance";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
	const [selectedItem, setSelectedItem] = useState("Wallet");

	return (
		<SafeAreaView style={{ flex: 1, position: "relative", paddingBottom: 56 }}>
			{/* HEADER */}
			<Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

			{/* CONTENT */}
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

			<FloatingNav />
		</SafeAreaView>
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
