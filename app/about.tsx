import { Text } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function About() {
	const { top } = useSafeAreaInsets();
	return (
		<SafeAreaView style={{ paddingTop: top }}>
			<Text>About</Text>
		</SafeAreaView>
	);
}
