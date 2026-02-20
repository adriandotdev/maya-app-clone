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
				<Text style={{ fontSize: 16, fontWeight: 600 }}>Transactions</Text>
				<Text style={{ fontWeight: 600, color: "#00a652" }}>See all</Text>
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
							<Text style={{ color: "#919191", fontSize: 12 }}>
								{transaction.descripton}
							</Text>
							<Text style={{ fontWeight: 500, fontSize: 14 }}>
								{transaction.entity}
							</Text>
						</View>
						<View>
							<Text
								style={{ textAlign: "right", color: "#919191", fontSize: 12 }}
							>
								{transaction.time}
							</Text>
							<Text
								style={{
									textAlign: "right",
									fontWeight: 500,
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
