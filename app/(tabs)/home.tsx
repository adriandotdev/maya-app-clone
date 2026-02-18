import {
	ArrowDownLeft,
	ArrowUpRight,
	Bell,
	ChevronRight,
	EyeIcon,
	Gift,
	Landmark,
	MessageCircleQuestionMark,
	PartyPopper,
	ScanLine,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
	const headerItems = ["Wallet", "Savings", "Credit", "Loans", "Cards"];
	const appListItems = [
		{
			icon: Landmark,
			label: "Bank Transfer",
		},
		{
			icon: PartyPopper,
			label: "Raffle",
		},
		{
			icon: Landmark,
			label: "Crypto",
		},
		{
			icon: PartyPopper,
			label: "Refer & Earn",
		},
		{
			icon: Landmark,
			label: "Bank Transfer",
		},
		{
			icon: PartyPopper,
			label: "Raffle",
		},
		{
			icon: Landmark,
			label: "Crypto",
		},
		{
			icon: PartyPopper,
			label: "Refer & Earn",
		},
	];

	const [selectedItem, setSelectedItem] = useState("Wallet");

	const sampleTransactionAmount = 153;

	return (
		<SafeAreaView style={{ flex: 1, position: "relative", paddingBottom: 56 }}>
			{/* HEADER */}
			<View style={styles.header}>
				<View
					style={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<View style={styles.usernameContainer}>
						<Text style={styles.username}>@yawausername</Text>
						<ChevronRight color={"#00a652"} />
					</View>

					<View style={styles.iconsContainer}>
						<MessageCircleQuestionMark />
						<Bell />
					</View>
				</View>
				<ScrollView
					contentContainerStyle={{ marginTop: 24, gap: 8 }}
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					{headerItems.map((item, index) => (
						<Pressable
							onPress={() => setSelectedItem(item)}
							key={index}
							style={{
								backgroundColor:
									selectedItem === item ? "black" : "transparent",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: selectedItem === item ? 90 : 70,
								borderRadius: 15,
								paddingVertical: 8,
							}}
						>
							<Text
								style={{
									color: selectedItem === item ? "white" : "#919191",
									fontWeight: "bold",
								}}
							>
								{item}
							</Text>
						</Pressable>
					))}
				</ScrollView>
			</View>

			{/* CONTENT */}
			<ScrollView contentContainerStyle={styles.content}>
				{/* Wallet Balance Card */}
				<View
					style={{ height: 220, backgroundColor: "#ebeeef", borderRadius: 16 }}
				>
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
								<Text style={styles.walletBalance}>0.00</Text>
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
								<Text style={{ color: "#00a652", fontWeight: 600 }}>
									Cash in
								</Text>
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
								<Text style={{ fontSize: 18, fontWeight: 600 }}>
									Easy Credit
								</Text>
								<ChevronRight />
							</View>
							<Text style={{ color: "#919191" }}>Borrow instantly</Text>
						</View>

						<View>
							<Text
								style={{ textAlign: "right", fontSize: 18, fontWeight: 500 }}
							>
								0.00
							</Text>
							<Text style={{ color: "#919191" }}>Available credit</Text>
						</View>
					</Pressable>
				</View>

				{/* App List Items */}
				<View
					style={{
						marginTop: 16,
						display: "flex",
						flexDirection: "row",
						gap: 16,
					}}
				>
					{appListItems.slice(0, 4).map((item, index) => (
						<View
							key={index}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
								flex: 1,
							}}
						>
							<View
								style={{
									backgroundColor: "#eee4e4",
									height: 60,
									width: 70,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: 10,
								}}
							>
								<item.icon />
							</View>
							<Text style={{ maxWidth: 80, textAlign: "center" }}>
								{item.label}
							</Text>
						</View>
					))}
				</View>

				<View
					style={{
						marginTop: 16,
						display: "flex",
						flexDirection: "row",
						gap: 16,
					}}
				>
					{appListItems.slice(4).map((item, index) => (
						<View
							key={index}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
								flex: 1,
							}}
						>
							<View
								style={{
									backgroundColor: "#eee4e4",
									height: 60,
									width: 70,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: 10,
								}}
							>
								<item.icon />
							</View>
							<Text style={{ maxWidth: 80, textAlign: "center" }}>
								{item.label}
							</Text>
						</View>
					))}
				</View>

				{/* Ads List */}
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						gap: 8,
						marginTop: 16,
					}}
				>
					{[1, 2, 3, 4].map((index) => (
						<View
							key={index}
							style={{
								width: 350,
								height: 100,
								borderRadius: 16,
								marginRight: 10,
								backgroundColor: "gray",
							}}
						></View>
					))}
				</ScrollView>

				{/* Transaction  */}
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
									<Text style={{ fontWeight: 500, fontSize: 16 }}>
										Maya Bank
									</Text>
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
										{sampleTransactionAmount.toLocaleString("en-PH", {
											style: "currency",
											currency: "PHP",
										})}
									</Text>
								</View>
							</View>
						))}
					</View>
				</View>

				{/* Rewards and Vouchers section */}
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

				<View
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 8,
					}}
				>
					<Text style={styles.footerTitle}>yawa</Text>
					<Text style={{ textAlign: "center", color: "#706e6e" }}>
						Yawa Philippines, Inc. is regulated by the Bangko Sentral ng
						Pilipinas - <Text style={{ color: "#00a652" }}>bsp.gov.ph</Text>
					</Text>
					<Text style={{ textAlign: "center", color: "#706e6e" }}>
						Visit our <Text style={{ color: "#00a652" }}>Help Center</Text> or
						call us at <Text style={{ color: "#00a652" }}>+123 4567 8910</Text>{" "}
						for any concerns
					</Text>
				</View>
			</ScrollView>

			<View
				style={{
					backgroundColor: "black",
					width: "55%",
					height: 50,
					position: "absolute",
					bottom: 40,
					left: "50%",
					transform: [{ translateX: "-50%" }],
					borderRadius: 16,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: 32,
				}}
			>
				<View
					style={{
						paddingHorizontal: 4,
						paddingVertical: 2,
						backgroundColor: "#00a652",
						borderRadius: 4,
					}}
				>
					<Text style={{ color: "black", fontSize: 16, fontWeight: 700 }}>
						m
					</Text>
				</View>
				<ScanLine color={"white"} />

				<Gift color={"white"} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	footerTitle: {
		fontSize: 24,
		fontWeight: 700,
		color: "#00a652",
	},
	header: {
		zIndex: 1,
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
	usernameContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	username: {
		fontSize: 20,
		fontWeight: "700",
	},
	iconsContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 24,
	},
	content: {
		padding: 24,
		paddingTop: 0,
	},
	item: {
		fontSize: 18,
		marginBottom: 12,
		backgroundColor: "#f0f0f0",
		padding: 12,
		borderRadius: 8,
	},
	walletBalance: {
		fontWeight: 700,
		fontSize: 32,
	},
});
