import { Pressable, View } from "react-native";

export default function ServicesButton({
	borderColor,
	onPress,
}: {
	borderColor: string;
	onPress: () => void;
}) {
	return (
		<Pressable style={{ gap: 3.5 }} onPress={onPress}>
			<View style={{ display: "flex", flexDirection: "row", gap: 3.5 }}>
				<View
					style={{
						height: 8,
						width: 8,
						backgroundColor: "black",
						borderWidth: 1,
						borderColor,
					}}
				></View>
				<View
					style={{
						height: 8,
						width: 8,
						backgroundColor: "black",
						borderWidth: 1,
						borderColor,
					}}
				></View>
			</View>
			<View style={{ display: "flex", flexDirection: "row", gap: 3.5 }}>
				<View
					style={{
						height: 8,
						width: 8,
						backgroundColor: "black",
						borderWidth: 1,
						borderColor,
					}}
				></View>
				<View
					style={{
						height: 8,
						width: 8,
						backgroundColor: "black",
						borderWidth: 1,
						borderColor,
					}}
				></View>
			</View>
		</Pressable>
	);
}
