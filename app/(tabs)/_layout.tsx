import FloatingNav from "@/components/core/FloatingNav";
import Header from "@/components/core/Header";
import { Tabs } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
	const [selectedItem, setSelectedItem] = useState("Wallet");

	return (
		<SafeAreaView style={{ flex: 1, position: "relative", paddingBottom: 56 }}>
			<Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			<Tabs screenOptions={{ headerShown: false }}>
				<Tabs.Screen
					name="home"
					options={{
						tabBarStyle: { display: "none" }, // hide tab bar on home
					}}
				/>
				<Tabs.Screen
					name="savings"
					options={{
						tabBarStyle: { display: "none" },
					}}
				/>
			</Tabs>

			<FloatingNav />
		</SafeAreaView>
	);
}
