import { formatToCurrency } from "@/utils/formatter";
import { ChevronDown, EyeIcon } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CreditBalance() {
	return (
		<View
			style={{
				maxHeight: 280,
				backgroundColor: "white",
				borderRadius: 16,
				paddingHorizontal: 16,
				paddingVertical: 16,
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						flex: 1,
					}}
				>
					<View>
						<Text style={styles.walletBalance}>{formatToCurrency(85000)}</Text>

						<Text style={{ color: "#5f5c5c", fontWeight: 500 }}>
							Available credit
						</Text>
					</View>
					<EyeIcon />
				</View>
			</View>

			<View style={{ display: "flex", gap: 4 }}>
				<View style={{ display: "flex", alignItems: "flex-end" }}>
					<Text style={{ fontSize: 12, textAlign: "right" }}>
						{formatToCurrency(85000)}
					</Text>
					<ChevronDown size={12} />
				</View>
				<View
					style={{ height: 1.5, width: "100%", backgroundColor: "#00a652" }}
				></View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-start",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 12 }}>{formatToCurrency(0)}</Text>
					<Text style={{ fontSize: 12, textAlign: "right" }}>
						{formatToCurrency(85000)}
					</Text>
				</View>
			</View>
			<Pressable
				style={{
					backgroundColor: "#ddf6e1",
					padding: 12,
					borderRadius: 16,
					marginTop: 12,
				}}
			>
				<Text
					style={{ color: "#00a652", fontWeight: 500, textAlign: "center" }}
				>
					Transfer to Wallet
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	walletBalance: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 8,
	},
});
