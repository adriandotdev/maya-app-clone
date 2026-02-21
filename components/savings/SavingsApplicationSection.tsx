import { Image } from "expo-image";
import { ChevronRight } from "lucide-react-native";
import { Text, View } from "react-native";

export default function SavingsApplicationSection() {
	return (
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
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Image
				source={require("../../assets/images/carousel/card.png")}
				style={{
					width: 150,
					height: 150,
					borderRadius: 16,
					position: "absolute",
					left: -60,
					top: 10,
				}}
			/>
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
	);
}
