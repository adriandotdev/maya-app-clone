import AppList from "@/components/core/AppList";
import {
	doMoreItems,
	earnRewardsItems,
	growMoneyItems,
	mainServices,
	secureBankingItems,
	shopAndPlayItems,
} from "@/data/dummy";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Services() {
	return (
		<ScrollView contentContainerStyle={styles.content}>
			<Text
				style={{
					fontSize: 24,
					fontFamily: "Poppins_600SemiBold",
					marginHorizontal: 24,
				}}
			>
				Services
			</Text>

			<View
				style={{
					paddingBottom: 16,
					borderBottomWidth: 1,
					borderBottomColor: "#e8e8e8",
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 8,
						marginTop: 16,

						paddingHorizontal: 18,
					}}
				>
					{mainServices.map((item, index) => (
						<View key={index} style={{ flex: 1, alignItems: "center", gap: 4 }}>
							<item.icon color={"#00a652"} />
							<Text
								style={{
									maxWidth: 80,
									textAlign: "center",
									fontFamily: "Poppins_500Medium",
									fontSize: 12,
									color: "#717171",
								}}
							>
								{item.label}
							</Text>
						</View>
					))}
				</View>
			</View>

			<View style={{ marginTop: 16, gap: 16, padding: 16 }}>
				<AppList
					categoryBackgroundColor="#e8f8eb"
					category="Secure banking"
					items={secureBankingItems}
				/>

				<AppList
					categoryBackgroundColor="#f1f7ff"
					category="Shop and play"
					items={shopAndPlayItems}
				/>

				<AppList
					hasSecondRow={false}
					categoryBackgroundColor="#fffcef"
					category="Grow my money"
					items={growMoneyItems}
				/>

				<AppList
					categoryBackgroundColor="#efeefe"
					category="Do more"
					items={doMoreItems}
				/>

				<AppList
					categoryBackgroundColor="#fff1fd"
					category="Earn rewards"
					items={earnRewardsItems}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		paddingTop: 0,
	},
});
