import { Image } from "expo-image";
import { ScrollView, View } from "react-native";

export default function AdsList() {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				gap: 8,
				marginTop: 16,
			}}
		>
			{[1, 2, 3, 4].map((index) => (
				<View
					key={index}
					style={{
						width: 350,
						height: 100,
						borderRadius: 16,
						marginRight: 10,
						backgroundColor: "gray",
					}}
				>
					<Image
						source={require("../../assets/images/carousel/image1.jpg")}
						style={{ width: 350, height: 100, borderRadius: 16 }}
						contentFit="cover"
						contentPosition="top center"
					/>
				</View>
			))}
		</ScrollView>
	);
}
