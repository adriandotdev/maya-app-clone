import { transactions } from "@/data/dummy";
import { formatToCurrency } from "@/utils/formatter";
import { Text, View } from "react-native";

export default function Transactions() {
	return (
		<View
			style={{
				marginTop: 24,
				backgroundColor: "white",
				padding: 16,
				borderRadius: 16,
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "flex-end",
				}}
			>
				<Text style={{ fontFamily: "Poppins_600SemiBold" }}>Transactions</Text>
				<Text style={{ color: "#00a652", fontFamily: "Poppins_600SemiBold" }}>
					See all
				</Text>
			</View>

			{/* Transaction Items */}
			<View style={{ marginTop: 16, display: "flex", gap: 16 }}>
				{transactions.map((transaction, index) => (
					<View
						key={index}
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View>
							<Text
								style={{
									color: "#919191",
									fontSize: 12,
									fontFamily: "Poppins_400Regular",
								}}
							>
								{transaction.descripton}
							</Text>
							<Text style={{ fontFamily: "Poppins_600SemiBold" }}>
								{transaction.entity}
							</Text>
						</View>
						<View>
							<Text
								style={{
									textAlign: "right",
									color: "#919191",
									fontSize: 12,
									fontFamily: "Poppins_400Regular",
								}}
							>
								{transaction.time}
							</Text>
							<Text
								style={{
									textAlign: "right",
									fontFamily: "Poppins_600SemiBold",
									fontSize: 14,
									color: transaction.type === "receiving" ? "#00a652" : "black",
								}}
							>
								{transaction.type === "outgoing" && "-"}
								{formatToCurrency(transaction.amount)}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
