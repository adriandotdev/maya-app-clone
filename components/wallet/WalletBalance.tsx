import { formatToCurrency } from "@/utils/formatter";
import {
	ArrowDownLeft,
	ArrowUpRight,
	ChevronRight,
	EyeIcon,
} from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function WalletBalance() {
	return (
		<View style={{ height: 220, backgroundColor: "#ebeeef", borderRadius: 16 }}>
			<View
				style={{
					height: 150,
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
					<View>
						<Text style={styles.walletBalance}>{formatToCurrency(76000)}</Text>
						<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
							<Text style={{ color: "#5f5c5c", fontWeight: 500 }}>
								Wallet balance
							</Text>
							<Text style={{ color: "#00a652", fontWeight: 500 }}>
								Auto cash in
							</Text>
						</View>
					</View>
					<EyeIcon />
				</View>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						width: "100%",
						marginTop: 12,
						gap: 8,
					}}
				>
					<Pressable
						style={{
							backgroundColor: "#ddf6e1",
							borderRadius: 12,
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
						<Text style={{ color: "#00a652", fontWeight: 600 }}>Cash in</Text>
					</Pressable>
					<Pressable
						style={{
							backgroundColor: "#ddf6e1",
							borderRadius: 12,
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
						<Text style={{ color: "#00a652", fontWeight: 600 }}>Send</Text>
					</Pressable>
				</View>
			</View>

			<Pressable
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					padding: 16,
				}}
			>
				<View>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Text style={{ fontSize: 18, fontWeight: 600 }}>Easy Credit</Text>
						<ChevronRight />
					</View>
					<Text style={{ color: "#919191" }}>Borrow instantly</Text>
				</View>

				<View>
					<Text style={{ textAlign: "right", fontSize: 18, fontWeight: 500 }}>
						0.00
					</Text>
					<Text style={{ color: "#919191" }}>Available credit</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	walletBalance: {
		fontWeight: 700,
		fontSize: 32,
	},
});
