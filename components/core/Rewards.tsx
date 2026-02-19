import { Text, View } from "react-native";

export default function Rewards() {
	return (
		<View style={{ padding: 16 }}>
			<Text style={{ fontWeight: 500, fontSize: 16 }}>Get rewards</Text>

			<View
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 8,
					marginTop: 8,
				}}
			>
				<View
					style={{
						backgroundColor: "#00a652",
						flex: 1,
						paddingVertical: 12,
						paddingHorizontal: 16,
						borderRadius: 16,
						gap: 4,
					}}
				>
					<Text style={{ fontSize: 16, color: "white", fontWeight: 700 }}>
						Missions
					</Text>
					<Text style={{ fontSize: 12, color: "white", fontWeight: 500 }}>
						Earn rewards for completing tasks
					</Text>
				</View>

				<View
					style={{
						backgroundColor: "#3a0479",
						flex: 1,
						paddingVertical: 12,
						paddingHorizontal: 16,
						borderRadius: 16,
						gap: 4,
					}}
				>
					<Text style={{ fontSize: 16, color: "white", fontWeight: 700 }}>
						Vouchers
					</Text>
					<Text style={{ fontSize: 12, color: "white", fontWeight: 500 }}>
						{"Go claim them before they're gone"}
					</Text>
				</View>
			</View>
		</View>
	);
}
