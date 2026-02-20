import NonWalletFooter from "@/components/core/NonWalletFooter";
import OpenAccountSection from "@/components/core/OpenAccountSection";
import SavingsApplicationSection from "@/components/core/SavingsApplicationSection";
import SavingsBalance from "@/components/core/SavingsBalance";
import SavingsSummary from "@/components/core/SavingsSummary";
import { ScrollView, StyleSheet } from "react-native";
export default function Savings() {
	return (
		<>
			<ScrollView contentContainerStyle={styles.content}>
				<SavingsBalance />

				<SavingsSummary />

				<OpenAccountSection />

				{/* @TODO: Add card background to left side */}
				<SavingsApplicationSection />

				<NonWalletFooter />
			</ScrollView>
		</>
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
