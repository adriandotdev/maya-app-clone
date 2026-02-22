import NonWalletFooter from "@/components/savings/NonWalletFooter";
import OpenAccountSection from "@/components/savings/OpenAccountSection";
import SavingsApplicationSection from "@/components/savings/SavingsApplicationSection";
import SavingsBalance from "@/components/savings/SavingsBalance";
import SavingsSummary from "@/components/savings/SavingsSummary";
import { ScrollView, StyleSheet } from "react-native";
export default function Savings() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			<SavingsBalance />

			<SavingsSummary />

			<OpenAccountSection />

			{/* @TODO: Add card background to left side */}
			<SavingsApplicationSection />

			<NonWalletFooter />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		padding: 24,
		paddingTop: 0,
	},
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 8,
		marginTop: 16,
	},
	footerTitle: {
		fontSize: 24,
		fontWeight: 700,
		color: "#00a652",
	},
});
