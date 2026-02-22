import { ChevronRight, LucideIcon } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Breadcrumb({
	icon,
	label,
	hideBorderBottom = false,
}: {
	icon: LucideIcon;
	label: string;
	hideBorderBottom?: boolean;
}) {
	const Icon = icon;

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				borderBottomColor: "#d4d1d1",
				borderBottomWidth: hideBorderBottom ? 0 : 1,
				paddingBottom: 16,
				paddingHorizontal: 16,
				paddingTop: 16,
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 8,
				}}
			>
				<Icon />
				<Text style={{ fontFamily: "Poppins_500Medium" }}>{label}</Text>
			</View>
			<ChevronRight />
		</View>
	);
}
