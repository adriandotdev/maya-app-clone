import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
	return (
		<View style={styles.container}>
			<Text style={styles.footerTitle}>yawa</Text>
			<Text
				style={{
					textAlign: "center",
					color: "#706e6e",
					fontFamily: "Poppins_400Regular",
				}}
			>
				Yawa Philippines, Inc. is regulated by the Bangko Sentral ng Pilipinas -{" "}
				<Text style={{ color: "#00a652" }}>bsp.gov.ph</Text>
			</Text>
			<Text
				style={{
					textAlign: "center",
					color: "#706e6e",
					fontFamily: "Poppins_400Regular",
				}}
			>
				Visit our <Text style={{ color: "#00a652" }}>Help Center</Text> or call
				us at{" "}
				<Text style={{ color: "#00a652", lineHeight: 20 }}>+123 4567 8910</Text>{" "}
				for any concerns
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 8,
	},
	footerTitle: {
		fontSize: 24,
		fontFamily: "Poppins_700Bold",
		color: "#00a652",
	},
});
