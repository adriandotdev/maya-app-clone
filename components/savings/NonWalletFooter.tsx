import { StyleSheet, Text, View } from "react-native";

export default function NonWalletFooter({
	hidePDICNotice,
}: {
	hidePDICNotice?: boolean;
}) {
	return (
		<View style={styles.container}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: 4,
				}}
			>
				<Text style={styles.footerTitle}>maya</Text>
				<View
					style={{
						backgroundColor: "#00a652",
						padding: 4,
						borderTopRightRadius: 12,
						borderBottomRightRadius: 12,
						borderBottomLeftRadius: 12,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							color: "white",
							fontWeight: "600",
							fontSize: 10,
						}}
					>
						BANK
					</Text>
				</View>
			</View>
			<Text
				style={{
					textAlign: "center",
					color: "#706e6e",
					fontFamily: "Poppins_400Regular",
				}}
			>
				Maya Savings is powered by Maya Bank, Inc.
			</Text>
			{!hidePDICNotice && (
				<Text
					style={{
						textAlign: "center",
						color: "#706e6e",
						lineHeight: 20,
						fontFamily: "Poppins_400Regular",
					}}
				>
					Deposits are insured by PDIC up to 1,000,000 per depositor. Maya Bank,
					Inc. is regulated by the Bangko Sentral ng Pilipinas. Learn more at{" "}
					<Text style={{ color: "#00a652" }}>www.bsp.gov.ph</Text>
				</Text>
			)}
			<Text
				style={{
					textAlign: "center",
					color: "#706e6e",
					lineHeight: 20,
					fontFamily: "Poppins_400Regular",
				}}
			>
				Visit our <Text style={{ color: "#00a652" }}>Help Center</Text> or call
				us at <Text style={{ color: "#00a652" }}>+123 4567 8910</Text> for any
				concerns
			</Text>
		</View>
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
		fontFamily: "Poppins_700Bold",
		color: "#00a652",
	},
});
