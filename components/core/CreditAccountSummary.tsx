import { ChevronRight, ReceiptText } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function CreditAccountSummary() {
	return (
		<View style={{ marginTop: 16, gap: 8 }}>
			<Text style={{ fontSize: 10, fontWeight: 600, color: "#706e6e" }}>
				MANAGE MY CREDIT
			</Text>

			<Pressable
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "white",
					padding: 16,
					borderRadius: 12,
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						gap: 4,
					}}
				>
					<ReceiptText size={15} />
					<Text>Account summary</Text>
				</View>

				<ChevronRight size={18} color={"#00a652"} />
			</Pressable>
		</View>
	);
}
