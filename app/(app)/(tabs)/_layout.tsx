import Header from "@/components/core/Header";
import { tabs } from "@/data/dummy";
import { Tabs } from "expo-router";
import { useState } from "react";

export default function TabLayout() {
	const [selectedItem, setSelectedItem] = useState("Wallet");

	return (
		<>
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
		</>
	);
}
