import { Image } from "expo-image";
import { ScrollView, View } from "react-native";

export default function AdsList() {
	const images = [
		require("../../assets/images/carousel/carousel1.png"),
		require("../../assets/images/carousel/carousel2.png"),
	];
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				gap: 8,
				marginTop: 16,
				minHeight: 102,
				paddingHorizontal: 4,
			}}
		>
			{images.map((url, index) => (
				<View
					key={index}
					style={{
						width: 350,
						height: 100,
						borderRadius: 16,
						marginRight: 10,
						backgroundColor: "gray",
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 1 },
						shadowOpacity: 0.25,
						shadowRadius: 0.84,
					}}
				>
					<Image
						source={url}
						style={{ width: 350, height: 100, borderRadius: 16 }}
						contentFit="cover"
						contentPosition="top center"
					/>
				</View>
			))}
		</ScrollView>
	);
}
