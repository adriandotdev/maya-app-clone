import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="home"
				options={{
					tabBarStyle: { display: "none" }, // hide tab bar on home
				}}
			/>
		</Tabs>
	);
}
