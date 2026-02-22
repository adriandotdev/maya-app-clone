import {
	ArrowDownLeft,
	ArrowUpRight,
	CoinsIcon,
	LucideIcon,
	PiggyBank,
	ScanQrCode,
} from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const mainServices: { icon: LucideIcon; label: string }[] = [
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
export default function Services() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			<Text
				style={{
					fontSize: 24,
					fontFamily: "Poppins_600SemiBold",
					marginHorizontal: 24,
				}}
			>
				Services
			</Text>

			<View
				style={{
					paddingBottom: 16,
					borderBottomWidth: 1,
					borderBottomColor: "#e8e8e8",
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 8,
						marginTop: 16,

						paddingHorizontal: 18,
					}}
				>
					{mainServices.map((item, index) => (
						<View key={index} style={{ flex: 1, alignItems: "center", gap: 4 }}>
							<item.icon color={"#00a652"} />
							<Text
								style={{
									maxWidth: 80,
									textAlign: "center",
									fontFamily: "Poppins_500Medium",
									fontSize: 12,
								}}
							>
								{item.label}
							</Text>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingTop: 0,
	},
});
