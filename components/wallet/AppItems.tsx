import { appListItems } from "@/data/dummy";
import { Text, View } from "react-native";

export default function AppItems() {
	return (
		<>
			<View
				style={{
					marginTop: 16,
					display: "flex",
					flexDirection: "row",
					gap: 8,
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
								backgroundColor: "#f4f6f5",
								height: 60,
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 10,
							}}
						>
							<item.icon color={"#00a652"} size={18} />
						</View>
						<Text
							style={{
								maxWidth: 80,
								textAlign: "center",
								fontSize: 12,
								fontFamily: "Poppins_600SemiBold",
								color: "#717171",
								lineHeight: 16, // keeps consistent spacing
							}}
						>
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
					gap: 8,
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
								backgroundColor: "#f4f6f5",
								height: 60,
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 10,
							}}
						>
							<item.icon color={"#00a652"} size={18} />
						</View>
						<Text
							style={{
								maxWidth: 80,
								textAlign: "center",
								fontSize: 12,
								fontFamily: "Poppins_600SemiBold",
								color: "#717171",
								lineHeight: 16,
							}}
						>
							{item.label}
						</Text>
					</View>
				))}
			</View>
		</>
	);
}
