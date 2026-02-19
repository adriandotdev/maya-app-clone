import { Text, View } from "react-native";

const SAMPLE_TRANSACTION_AMOUNT = 153;

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
				{[1, 2, 3, 4, 5].map((index) => (
					<View
						key={index}
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View>
							<Text style={{ color: "#919191" }}>Bills Payment for</Text>
							<Text style={{ fontWeight: 500, fontSize: 16 }}>Maya Bank</Text>
						</View>
						<View>
							<Text style={{ textAlign: "right", color: "#919191" }}>
								1 hour ago
							</Text>
							<Text
								style={{
									textAlign: "right",
									fontWeight: 500,
									fontSize: 16,
								}}
							>
								{SAMPLE_TRANSACTION_AMOUNT.toLocaleString("en-PH", {
									style: "currency",
									currency: "PHP",
								})}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
