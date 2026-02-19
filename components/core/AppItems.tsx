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
		</>
	);
}
