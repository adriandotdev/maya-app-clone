import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
	NunitoSans_400Regular,
	NunitoSans_500Medium,
	NunitoSans_600SemiBold,
	NunitoSans_700Bold,
	useFonts,
} from "@expo-google-fonts/nunito-sans";
export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		NunitoSans_600SemiBold,
		NunitoSans_700Bold,
		NunitoSans_500Medium,
		NunitoSans_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="login" />
				<Stack.Screen name="wallet" />
			</Stack>
		</SafeAreaProvider>
	);
}
