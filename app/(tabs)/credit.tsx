import CreditAccountSummary from "@/components/core/CreditAccountSummary";
import CreditBalance from "@/components/core/CreditBalance";
import CreditOutstandingBalance from "@/components/core/CreditOutstandingBalance";
import NonWalletFooter from "@/components/core/NonWalletFooter";
import Transactions from "@/components/wallet/Transactions";
import { ScrollView, StyleSheet } from "react-native";

export default function Credit() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			<CreditBalance />

			<CreditOutstandingBalance />

			<Transactions />

			<CreditAccountSummary />

			<NonWalletFooter hidePDICNotice />
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
	walletBalance: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 8,
	},
});
