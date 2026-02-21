import FloatingNav from "@/components/core/FloatingNav";
import Header from "@/components/core/Header";
import { tabs } from "@/data/dummy";
import { Tabs } from "expo-router";
import { useState } from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
	const [selectedItem, setSelectedItem] = useState("Wallet");

	return (
		<SafeAreaView
			style={{
				flex: 1,
				position: "relative",
				paddingBottom: Platform.OS === "ios" ? 56 : 75,
			}}
		>
			<Header selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			<Tabs screenOptions={{ headerShown: false, animation: "shift" }}>
				{tabs.map((tab, index) => (
					<Tabs.Screen
						key={index}
						name={tab}
						options={{
							tabBarStyle: { display: "none" },
						}}
					/>
				))}
			</Tabs>

			<FloatingNav />
		</SafeAreaView>
	);
}
