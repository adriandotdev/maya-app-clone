import { formatToCurrency } from "@/utils/formatter";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight, Flame, PiggyBank } from "lucide-react-native";
import { Text, View } from "react-native";

export default function SavingsSummary() {
	return (
		<View
			style={{
				backgroundColor: "#00a652",
				marginTop: 24,
				borderRadius: 16,
				paddingTop: 16,
			}}
		>
			<View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
				<View
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<PiggyBank color={"pink"} fill={"pink"} />

					{/* Savings Daily Interest */}
					<View
						style={{
							backgroundColor: "#015b2e",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 4,
							paddingVertical: 2,
							paddingHorizontal: 8,
							borderRadius: 16,
						}}
					>
						<Text style={{ color: "white", fontWeight: 600, fontSize: 12 }}>
							6.0% p.a.
						</Text>
						<Flame size={16} color={"orange"} fill={"yellow"} />
					</View>
				</View>

				<View style={{ marginTop: 8 }}>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 4,
						}}
					>
						<Text style={{ fontSize: 18, color: "white", fontWeight: 600 }}>
							My Savings
						</Text>
						<ChevronRight color={"white"} />
					</View>
					<Text style={{ color: "white", fontWeight: 600, marginTop: 4 }}>
						{formatToCurrency(1500)}
					</Text>
				</View>
			</View>

			<LinearGradient
				colors={["#08a654", "#027b3c"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{
					flex: 1,
					maxHeight: 90,
					borderBottomRightRadius: 16,
					borderBottomLeftRadius: 16,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 16,
					paddingBottom: 8,
					paddingTop: 16,
				}}
			>
				<Text style={{ color: "white", fontWeight: 600, fontSize: 12 }}>
					9 days left at 6% p.a.
				</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 2,
						alignItems: "center",
					}}
				>
					<Text style={{ color: "white", fontSize: 12, fontWeight: 600 }}>
						Boost more
					</Text>
					<ChevronRight size={16} color={"white"} />
				</View>
			</LinearGradient>
		</View>
	);
}
