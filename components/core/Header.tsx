import { headerItems } from "@/data/dummy";
import { Href, useRouter } from "expo-router";
import {
	Bell,
	ChevronRight,
	MessageCircleQuestionMark,
} from "lucide-react-native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type HeaderProps = {
	selectedItem: string;
	setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header(props: HeaderProps) {
	const router = useRouter();
	const { selectedItem, setSelectedItem } = props;

	const handleTabPress = (item: { label: string; href: string }) => {
		setSelectedItem(item.label);
		router.push(item.href as Href);
	};

	return (
		<View style={styles.header}>
			<View
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<View style={styles.usernameContainer}>
					<Text style={styles.username}>@mayausername</Text>
					<ChevronRight color={"#00a652"} />
				</View>

				<View style={styles.iconsContainer}>
					<MessageCircleQuestionMark />
					<Bell />
				</View>
			</View>
			<ScrollView
				contentContainerStyle={{ marginTop: 24, gap: 8 }}
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				{headerItems.map((item, index) => (
					<Pressable
						onPress={() => handleTabPress(item)}
						key={index}
						style={{
							backgroundColor:
								selectedItem === item.label ? "black" : "transparent",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: selectedItem === item.label ? 90 : 70,
							borderRadius: 15,
							paddingVertical: 5,
						}}
					>
						<Text
							style={{
								color: selectedItem === item.label ? "white" : "#919191",
								fontFamily: "Poppins_600SemiBold",
							}}
						>
							{item.label}
						</Text>
					</Pressable>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	footerTitle: {
		fontSize: 24,
		fontWeight: 700,
		color: "#00a652",
	},
	header: {
		zIndex: 1,
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
	usernameContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	username: {
		fontSize: 20,
		fontWeight: "700",
	},
	iconsContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 24,
	},
	content: {
		padding: 24,
		paddingTop: 0,
	},
	item: {
		fontSize: 18,
		marginBottom: 12,
		backgroundColor: "#f0f0f0",
		padding: 12,
		borderRadius: 8,
	},
	walletBalance: {
		fontWeight: 700,
		fontSize: 32,
	},
});
