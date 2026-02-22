import { usePathname, useRouter } from "expo-router";
import { ScanLine } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import ServicesButton from "./ServicesButton";

type NavType = "wallet" | "scan" | "services";
export default function FloatingNav() {
	const router = useRouter();
	const [navigation, setNavigation] = useState<NavType>("wallet");
	const pathname = usePathname();

	const handlePress = (type: NavType) => {
		if (pathname.slice(1) === type) return;

		setNavigation(type);

		switch (type) {
			case "wallet":
				router.replace("/wallet");
				break;
			case "services":
				router.push("/services");
		}
	};

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
			<Pressable
				onPress={() => handlePress("wallet")}
				style={{
					paddingHorizontal: 4,
					paddingVertical: 2,
					backgroundColor: navigation === "wallet" ? "#00a652" : "white",
					borderRadius: 4,
				}}
			>
				<Text
					style={{
						color: navigation === "wallet" ? "black" : "black",
						fontSize: 16,
						fontWeight: 700,
					}}
				>
					m
				</Text>
			</Pressable>
			<ScanLine color={"white"} />

			<ServicesButton
				borderColor={navigation === "services" ? "#00a652" : "white"}
				onPress={() => handlePress("services")}
			/>
		</View>
	);
}
