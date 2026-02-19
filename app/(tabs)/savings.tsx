import SavingsBalance from "@/components/core/SavingsBalance";
import SavingsSummary from "@/components/core/SavingsSummary";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function Savings() {
	return (
		<>
			<ScrollView contentContainerStyle={styles.content}>
				<SavingsBalance />

				<SavingsSummary />

				<View
					style={{
						backgroundColor: "black",

						borderRadius: 16,
						marginTop: 24,
					}}
				>
					<View style={{ padding: 16 }}>
						<Text style={{ color: "#777575", fontWeight: 700, fontSize: 12 }}>
							MORE WAYS TO SAVE
						</Text>

						<View style={{ marginTop: 16, display: "flex", gap: 16 }}>
							<View style={{ display: "flex", gap: 4 }}>
								<Text
									style={{ color: "#ffffff", fontSize: 16, fontWeight: 700 }}
								>
									Time Deposit
								</Text>
								<Text style={{ color: "#ccc" }}>
									Save for longer and earn up to 6% p.a.
								</Text>
							</View>

							<View style={{ display: "flex", gap: 4 }}>
								<Text
									style={{ color: "#ffffff", fontSize: 16, fontWeight: 700 }}
								>
									Personal Goals
								</Text>
								<Text style={{ color: "#ccc" }}>
									Set a short-term goal and earn up to 8% p.a.
								</Text>
							</View>
						</View>
					</View>

					<LinearGradient
						colors={["#161616", "#414141"]}
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
							paddingHorizontal: 16,
							paddingBottom: 8,
							paddingTop: 16,
						}}
					>
						<Text style={{ color: "white", fontWeight: 700 }}>
							Open an account now
						</Text>
						<ChevronRight color={"#00a652"} />
					</LinearGradient>
				</View>

				{/* @TODO: Add card background to left side */}
				<View
					style={{
						backgroundColor: "black",
						borderRadius: 16,
						marginTop: 24,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: 24,
						gap: 4,
					}}
				>
					<View
						style={{
							display: "flex",
							gap: 4,
						}}
					>
						<Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
							Ready to start your
						</Text>
						<Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
							Yawa Black journey?
						</Text>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: 3,
							}}
						>
							<Text style={{ color: "#ccc" }}>Apply now</Text>
							<ChevronRight size={14} color={"#ccc"} />
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	content: {
		padding: 24,
		paddingTop: 0,
	},
});
