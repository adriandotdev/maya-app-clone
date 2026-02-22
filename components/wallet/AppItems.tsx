import { appListItems } from "@/data/dummy";
import { Text, View } from "react-native";

export default function AppItems() {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{appListItems.map((item, index) => (
					<View
						key={index}
						style={{
							flexBasis: "25%",
							alignItems: "center",
							padding: 6,
							gap: 8,
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
		</>
	);
}
