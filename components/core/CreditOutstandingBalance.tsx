import { formatToCurrency } from "@/utils/formatter";
import { CircleAlert } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function CreditOutstandingBalance() {
	return (
		<View
			style={{
				maxHeight: 380,
				backgroundColor: "white",
				borderRadius: 16,
				paddingHorizontal: 16,
				paddingVertical: 16,
				marginTop: 16,
				gap: 8,
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 16, fontWeight: 500 }}>
					Outstanding balance
				</Text>
				<Text style={{ fontSize: 12, fontWeight: 500 }}>
					{formatToCurrency(5000)}
				</Text>
			</View>
			{/* Description */}
			<Text style={{ fontSize: 12, color: "#706e6e", maxWidth: 250 }}>
				Includes your total unpaid credit plus fees, documentary stamp tax, and
				any overdue penalties.
			</Text>

			{/* Pay Now with "pay partially text" */}
			<View>
				<Pressable
					style={{
						backgroundColor: "#00a652",
						padding: 12,
						borderRadius: 16,
					}}
				>
					<Text
						style={{ textAlign: "center", fontWeight: 600, color: "white" }}
					>
						Pay now
					</Text>
				</Pressable>
				<Text
					style={{
						textAlign: "center",
						marginTop: 4,
						fontSize: 12,
						color: "#706e6e",
					}}
				>
					Pay partially or in full anytime 😉
				</Text>
			</View>

			{/* Separator */}
			<View
				style={{
					width: "100%",
					height: 1,
					backgroundColor: "#d2d2d2",
					marginVertical: 12,
				}}
			></View>

			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: 4,
						}}
					>
						<Text style={{ fontSize: 16, fontWeight: 500 }}>Latest bill</Text>
						<CircleAlert size={16} />
					</View>
					<Text style={{ color: "#706e6e", fontSize: 12 }}>
						Statement for Jan 2026
					</Text>
				</View>

				<View>
					<Text style={{ fontSize: 16, textAlign: "right", fontWeight: 500 }}>
						{formatToCurrency(1500)}
					</Text>
					<Text style={{ color: "#706e6e", fontSize: 12, textAlign: "right" }}>
						Due Feb 11, 2026
					</Text>
				</View>
			</View>

			<View
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 12,
					marginTop: 10,
				}}
			>
				<Pressable
					style={{
						borderColor: "#d1cfcf",
						padding: 8,
						borderWidth: 1,
						borderRadius: 14,
						flex: 1,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 12,
							fontWeight: 600,
							color: "#00a652",
						}}
					>
						View Statement
					</Text>
				</Pressable>
				<Pressable
					style={{
						borderColor: "#d1cfcf",
						padding: 8,
						borderWidth: 1,
						borderRadius: 14,
						flex: 1,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 12,
							color: "#00a652",
							fontWeight: 600,
						}}
					>
						Pay this bil
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
