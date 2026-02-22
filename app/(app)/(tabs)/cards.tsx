import { formatToCurrency } from "@/utils/formatter";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Cards() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			<Text style={{ fontWeight: 700, marginBottom: 12 }}>Credit Cards</Text>

			<LinearGradient
				colors={["#a8a8a8", "#e9e9e9", "#a8a8a8"]}
				start={{ x: 0, y: 0 }} // top
				end={{ x: 0, y: 1 }} // bottom
				style={{
					padding: 16,
					borderRadius: 16,
					position: "relative",
					overflow: "visible",
				}}
			>
				<Text style={styles.cardTitle}>yawa black</Text>
				<Text
					style={{
						fontSize: 10,
						fontFamily: "Poppins_500Medium",
						letterSpacing: 6,
						marginTop: 2,
					}}
				>
					CREDIT CARD
				</Text>

				<View style={{ marginTop: 4 }}>
					<Text style={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}>
						Instant miles.
					</Text>
					<Text style={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}>
						Seriously secure.
					</Text>
					<Text style={{ fontSize: 12, fontFamily: "Poppins_400Regular" }}>
						{"Everyone's invited."}
					</Text>
				</View>

				<Pressable
					style={{
						backgroundColor: "#3a3a3a",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						padding: 6,
						borderRadius: 16,
						maxWidth: 100,
						marginTop: 8,
					}}
				>
					<Text
						style={{
							fontSize: 10,
							color: "white",
							fontFamily: "Poppins_700Bold",
						}}
					>
						Apply now
					</Text>
					<ChevronRight color={"white"} size={14} />
				</Pressable>

				<Image
					source={require("../../../assets/images/mayablackcard.png")}
					style={{
						width: 160,
						height: 120,
						position: "absolute",
						right: 15,
						top: "55%",
						transform: "translateY(-50%)",
					}}
				/>
			</LinearGradient>

			<View
				style={{ display: "flex", flexDirection: "row", gap: 8, marginTop: 16 }}
			>
				<View
					style={{
						height: 100,
						maxWidth: 170,
						width: "100%",
						// backgroundColor: "gray",
						flex: 1,
						borderRadius: 12,
					}}
				>
					<Image
						source={require("../../../assets/images/landers.png")}
						style={{ width: "100%", height: "100%", borderRadius: 12 }}
						contentFit="cover"
					/>
				</View>

				<View
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "center",
						maxWidth: "50%",
					}}
				>
					<Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}>
						Landers Cashback
					</Text>
					<View style={{ marginTop: 4, gap: 4 }}>
						<Text style={{ fontFamily: "Poppins_400Regular" }}>.... 7811</Text>
						<Text style={{ fontFamily: "Poppins_400Regular" }}>
							{formatToCurrency(15000)} available
						</Text>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 16 }}>
				<Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}>
					WALLET CARDS
				</Text>

				<View
					style={{
						marginTop: 16,
						display: "flex",
						flexDirection: "row",
						gap: 16,
					}}
				>
					{/* Sample Card */}

					<View
						style={{ flex: 1, display: "flex", alignItems: "center", gap: 4 }}
					>
						<View
							style={{
								height: 100,
								borderRadius: 12,
								width: "100%",
							}}
						>
							<Image
								source={require("../../../assets/images/card.png")}
								style={{ width: "100%", height: "100%", borderRadius: 12 }}
								contentFit="contain"
							/>
						</View>
						<Text style={{ fontSize: 12, fontFamily: "Poppins_600SemiBold" }}>
							yawausername
						</Text>
					</View>

					<View
						style={{ flex: 1, display: "flex", alignItems: "center", gap: 4 }}
					>
						<View
							style={{
								height: 100,
								borderRadius: 12,
								width: "100%",
							}}
						>
							<Image
								source={require("../../../assets/images/card2.png")}
								style={{ width: "100%", height: "100%", borderRadius: 12 }}
								contentFit="contain"
							/>
						</View>
						<Text style={{ fontSize: 12, fontFamily: "Poppins_600SemiBold" }}>
							yawausername
						</Text>
					</View>
				</View>
			</View>

			<View
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 8,
					padding: 12,
					borderWidth: 1,
					borderColor: "#e1dfdf",
					borderRadius: 14,
					marginTop: 12,
				}}
			>
				<Text>🧐</Text>
				<View>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Text
							style={{ color: "#00a652", fontFamily: "Poppins_600SemiBold" }}
						>
							{"Don't see your Maya card?"}
						</Text>
						<ChevronRight color={"#00a652"} size={16} />
					</View>
					<Text
						style={{
							fontSize: 12,
							color: "#6c6868",
							fontFamily: "Poppins_400Regular",
						}}
					>
						Activate a card bought from any of our partners
					</Text>
				</View>
			</View>

			<View style={{ marginTop: 16, gap: 16 }}>
				<Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}>
					GET A NEW WALLET CARD
				</Text>
				<View
					style={{
						backgroundColor: "white",
						borderWidth: 1,
						borderColor: "#e1dfdf",
						borderRadius: 16,
						minHeight: 150,
						padding: 16,
					}}
				>
					<Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}>
						Wallet Cards
					</Text>

					{/* Card and details */}
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							marginTop: 8,
							alignItems: "center",
							gap: 8,
						}}
					>
						<View
							style={{
								height: 50,
								borderRadius: 4,
								flex: 1,
								width: "50%",
								maxWidth: 90,
							}}
						>
							<Image
								source={require("../../../assets/images/card.png")}
								style={{ width: "100%", height: "100%", borderRadius: 4 }}
								contentFit="contain"
							/>
						</View>
						<View style={{ flex: 1, gap: 4 }}>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
									Yawa Mastercard
								</Text>
								<ChevronRight size={14} color={"#00a652"} />
							</View>
							<Text
								style={{ color: "#4a4949", fontFamily: "Poppins_400Regular" }}
							>
								{formatToCurrency(200)}
							</Text>
						</View>
					</View>
					{/* Card and details */}
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							marginTop: 8,
							alignItems: "center",
							gap: 8,
						}}
					>
						<View
							style={{
								height: 50,
								borderRadius: 4,
								flex: 1,
								width: "50%",
								maxWidth: 90,
							}}
						>
							<Image
								source={require("../../../assets/images/card.png")}
								style={{ width: "100%", height: "100%", borderRadius: 4 }}
								contentFit="contain"
							/>
						</View>
						<View style={{ flex: 1, gap: 4 }}>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}>
									Yawa Visa
								</Text>
								<ChevronRight size={14} color={"#00a652"} />
							</View>
							<Text
								style={{ color: "#4a4949", fontFamily: "Poppins_400Regular" }}
							>
								{formatToCurrency(200)}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		padding: 24,
		paddingTop: 0,
	},
	cardTitle: { fontSize: 18, fontFamily: "Poppins_700Bold" },
});
