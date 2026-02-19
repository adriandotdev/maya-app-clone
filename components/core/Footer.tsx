import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
	return (
		<View style={styles.container}>
			<Text style={styles.footerTitle}>yawa</Text>
			<Text style={{ textAlign: "center", color: "#706e6e" }}>
				Yawa Philippines, Inc. is regulated by the Bangko Sentral ng Pilipinas -{" "}
				<Text style={{ color: "#00a652" }}>bsp.gov.ph</Text>
			</Text>
			<Text style={{ textAlign: "center", color: "#706e6e" }}>
				Visit our <Text style={{ color: "#00a652" }}>Help Center</Text> or call
				us at <Text style={{ color: "#00a652" }}>+123 4567 8910</Text> for any
				concerns
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
		fontWeight: 700,
		color: "#00a652",
	},
});
