import FloatingNav from "@/components/core/FloatingNav";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				position: "relative",
				paddingBottom: Platform.OS === "ios" ? 56 : 75,
			}}
		>
			<Stack
				screenOptions={{
					headerShown: false,
					animation: "slide_from_left",
				}}
			/>
			<FloatingNav />
		</SafeAreaView>
	);
}
