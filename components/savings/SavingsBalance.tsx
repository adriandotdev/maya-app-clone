import { formatToCurrency } from "@/utils/formatter";
import { ArrowDownLeft, ArrowUpRight, EyeIcon } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SavingsBalance() {
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
						<Text style={styles.walletBalance}>{formatToCurrency(105000)}</Text>

						<Text style={{ color: "#5f5c5c", fontFamily: "Poppins_500Medium" }}>
							Total savings
						</Text>
					</View>
					<EyeIcon />
				</View>
			</View>

			<View
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					marginTop: 16,
					gap: 8,
				}}
			>
				<Pressable
					style={{
						backgroundColor: "#ddf6e1",
						borderRadius: 32,
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						gap: 4,
						padding: 12,
						flex: 1,
					}}
				>
					<ArrowDownLeft color={"#00a652"} />
					<Text style={{ color: "#00a652", fontFamily: "Poppins_600SemiBold" }}>
						Deposit
					</Text>
				</Pressable>
				<Pressable
					style={{
						backgroundColor: "#ddf6e1",
						borderRadius: 32,
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						gap: 4,
						padding: 12,
						flex: 1,
					}}
				>
					<ArrowUpRight color={"#00a652"} />
					<Text style={{ color: "#00a652", fontFamily: "Poppins_600SemiBold" }}>
						Transfer
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	walletBalance: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 32,
		marginBottom: 8,
	},
});
