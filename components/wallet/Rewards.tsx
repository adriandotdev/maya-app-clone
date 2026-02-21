import { Text, View } from "react-native";

export default function Rewards() {
	return (
		<View style={{ paddingVertical: 16 }}>
			<Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}>
				Get rewards
			</Text>

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
					<Text
						style={{
							fontSize: 16,
							color: "white",
							fontFamily: "Poppins_700Bold",
						}}
					>
						Missions
					</Text>
					<Text
						style={{
							fontSize: 12,
							color: "white",
							fontFamily: "Poppins_500Medium",
						}}
					>
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
					<Text
						style={{
							fontSize: 16,
							color: "white",
							fontFamily: "Poppins_700Bold",
						}}
					>
						Vouchers
					</Text>
					<Text
						style={{
							fontSize: 12,
							color: "white",
							fontFamily: "Poppins_500Medium",
						}}
					>
						{"Go claim them before they're gone"}
					</Text>
				</View>
			</View>
		</View>
	);
}
