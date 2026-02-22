import { LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";

export default function AppList({
	category,
	items,
	categoryBackgroundColor,
	hasSecondRow = true,
}: {
	category: string;
	categoryBackgroundColor: string;
	items: { icon: LucideIcon; label: string }[];
	hasSecondRow?: boolean;
}) {
	return (
		<View
			style={{ backgroundColor: categoryBackgroundColor, borderRadius: 12 }}
		>
			<Text
				style={{
					paddingVertical: 12,
					paddingHorizontal: 16,
					fontFamily: "Poppins_500Medium",
				}}
			>
				{category}
			</Text>

			<View
				style={{
					borderRadius: 12,
					backgroundColor: "#fff",
					padding: 16,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{items.map((item, index) => (
						<View
							key={index}
							style={{
								flexBasis: "25%",
								alignItems: "center",
								padding: 6,
							}}
						>
							<View
								style={{
									backgroundColor: "#f4f6f5",
									height: 60,
									width: "100%",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: 10,
								}}
							>
								<item.icon color={"#01723a"} size={18} />
							</View>

							<Text
								style={{
									marginTop: 6,
									maxWidth: 80,
									textAlign: "center",
									fontSize: 12,
									fontFamily: "Poppins_600SemiBold",
									color: "#717171",
									lineHeight: 16,
								}}
							>
								{item.label}
							</Text>
						</View>
					))}
				</View>

				{/* {hasSecondRow && (
					<View
						style={{
							marginTop: 16,
							flexDirection: "row",
							width: "100%",
							gap: 8,
						}}
					>
						{items.slice(4).map((item, index) => (
							<View
								key={index}
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									flex: 1,
									aspectRatio: 1 / 1,
								}}
							>
								<View
									style={{
										backgroundColor: "#f4f6f5",
										height: 60,
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 10,
									}}
								>
									<item.icon color={"#00a652"} size={18} />
								</View>
								<Text
									style={{
										maxWidth: 80,
										textAlign: "center",
										fontSize: 12,
										fontFamily: "Poppins_600SemiBold",
										color: "#717171",
										lineHeight: 16,
									}}
								>
									{item.label}
								</Text>
							</View>
						))}
					</View>
				)} */}
			</View>
		</View>
	);
}
