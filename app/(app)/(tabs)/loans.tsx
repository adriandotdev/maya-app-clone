import NonWalletFooter from "@/components/savings/NonWalletFooter";
import { formatToCurrency } from "@/utils/formatter";
import {
	AlertCircle,
	ChevronRight,
	Dot,
	GraduationCap,
	ReceiptText,
	User,
} from "lucide-react-native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Loans() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 4,
					alignItems: "center",
				}}
			>
				<Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}>
					Personal Loan
				</Text>
				<ChevronRight color={"#00a652"} size={16} />
			</View>

			<View
				style={{
					marginTop: 8,
					gap: 4,
				}}
			>
				<Text
					style={{
						color: "#5f5c5c",
						fontSize: 12,
						fontFamily: "Poppins_400Regular",
					}}
				>
					Borrow larger amounts over a longer period
				</Text>

				<View
					style={{
						display: "flex",
						flexDirection: "row",

						alignItems: "center",
					}}
				>
					<Text
						style={{
							color: "#5f5c5c",
							fontSize: 12,
							fontFamily: "Poppins_400Regular",
						}}
					>
						{formatToCurrency(1500)} remaining
					</Text>
					<Dot />
					<Text
						style={{
							color: "#5f5c5c",
							fontSize: 12,
							fontFamily: "Poppins_400Regular",
						}}
					>
						3 terms paid
					</Text>
				</View>
			</View>

			{/* Next payment Term Container */}

			<View
				style={{
					minHeight: 100,
					flex: 1,
					backgroundColor: "white",
					borderRadius: 16,
					marginTop: 16,
					padding: 16,

					borderWidth: 1,
					borderColor: "#e7e7e7",
				}}
			>
				<Text style={{ fontFamily: "Poppins_500Medium", fontSize: 12 }}>
					Next payment
				</Text>

				<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
					{/* Amount Due */}
					<View
						style={{
							marginTop: 8,
							backgroundColor: "#ececec",
							padding: 16,
							borderRadius: 16,
							flex: 1,
						}}
					>
						<Text
							style={{
								color: "#5f5c5c",
								fontSize: 12,
								fontFamily: "Poppins_400Regular",
							}}
						>
							Amount due
						</Text>
						<Text style={{ fontFamily: "Poppins_600SemiBold" }}>
							{formatToCurrency(500)}
						</Text>
					</View>

					<View
						style={{
							marginTop: 8,
							backgroundColor: "#ececec",
							padding: 16,
							borderRadius: 16,
							flex: 1,
						}}
					>
						<Text
							style={{
								color: "#5f5c5c",
								fontSize: 12,
								fontFamily: "Poppins_400Regular",
							}}
						>
							Due date
						</Text>
						<Text style={{ fontFamily: "Poppins_600SemiBold" }}>
							Feb, 19, 2024
						</Text>
					</View>
				</View>

				<View
					style={{
						backgroundColor: "#ececec",
						minHeight: 50,
						flex: 1,
						borderRadius: 16,
						marginTop: 16,
						display: "flex",
						flexDirection: "row",
						padding: 16,
						gap: 4,
					}}
				>
					<AlertCircle size={18} color={"white"} fill={"#00a652"} />
					<Text
						style={{
							fontSize: 12,
							color: "#5f5c5c",
							fontFamily: "Poppins_500Medium",
							wordWrap: "wrap",
							marginRight: 12,
						}}
					>
						Successful loan repayments will be reflected within 24 hours.
					</Text>
				</View>

				<View style={{ gap: 8 }}>
					<Pressable
						style={{
							backgroundColor: "#00a652",
							padding: 16,
							borderRadius: 16,
							marginTop: 16,
						}}
					>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontFamily: "Poppins_600SemiBold",
							}}
						>
							Pay now
						</Text>
					</Pressable>
					<Text
						style={{
							textAlign: "center",
							fontSize: 12,
							color: "#5f5c5c",
							fontFamily: "Poppins_400Regular",
						}}
					>
						Pay partially or in full anytime👌
					</Text>
				</View>
			</View>

			<Text
				style={{
					marginTop: 32,
					marginBottom: 16,
					fontFamily: "Poppins_600SemiBold",
				}}
			>
				More actions
			</Text>

			<View
				style={{
					borderWidth: 1,
					borderColor: "#d4d1d1",
					// paddingBottom: 16,
					borderRadius: 16,
				}}
			>
				{/* More actions item */}
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						borderBottomColor: "#d4d1d1",
						borderBottomWidth: 1,
						paddingBottom: 16,
						paddingHorizontal: 8,
						paddingTop: 16,
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 8,
						}}
					>
						<User />
						<Text style={{ fontFamily: "Poppins_500Medium" }}>
							Account summary
						</Text>
					</View>
					<ChevronRight />
				</View>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						borderBottomColor: "#d4d1d1",
						borderBottomWidth: 1,
						paddingBottom: 16,
						paddingHorizontal: 8,
						paddingTop: 16,
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 8,
						}}
					>
						<ReceiptText />
						<Text style={{ fontFamily: "Poppins_500Medium" }}>
							View closed loans
						</Text>
					</View>
					<ChevronRight />
				</View>

				<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",

						paddingBottom: 16,
						paddingHorizontal: 8,
						paddingTop: 16,
					}}
				>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 8,
						}}
					>
						<GraduationCap />
						<Text style={{ fontFamily: "Poppins_500Medium" }}>
							Learn more about loans
						</Text>
					</View>
					<ChevronRight />
				</View>
			</View>
			<NonWalletFooter hidePDICNotice />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		padding: 24,
		paddingTop: 0,
	},
});
