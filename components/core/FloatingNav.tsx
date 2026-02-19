import { Gift, ScanLine } from "lucide-react-native";
import { Text, View } from "react-native";

export default function FloatingNav() {
	return (
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
				<Text style={{ color: "black", fontSize: 16, fontWeight: 700 }}>m</Text>
			</View>
			<ScanLine color={"white"} />

			<Gift color={"white"} />
		</View>
	);
}
