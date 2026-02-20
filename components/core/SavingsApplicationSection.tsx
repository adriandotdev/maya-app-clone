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
	);
}
