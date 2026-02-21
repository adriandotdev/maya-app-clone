import { Smartphone } from "lucide-react-native";
import {
	Keyboard,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
	const [secure, setSecure] = useState(true);
	const { bottom } = useSafeAreaInsets();
	const route = useRouter();

	const handleLogin = () => {
		route.push("/wallet");
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View
					style={{
						flex: 1,
					}}
				>
					<View
						style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
					>
						<Text style={styles.title}>yawa</Text>

						<View style={styles.numberContainer}>
							<Text style={styles.mobileNumber}>+63 912 341 1134</Text>
							<Text style={styles.accountName}>John Doe</Text>
						</View>

						<View
							style={{
								width: "100%",
								paddingHorizontal: 24,
								marginTop: 24,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 16,
							}}
						>
							<View
								style={{
									width: "100%",
									position: "relative",
								}}
							>
								<TextInput
									style={styles.mobileInput}
									placeholder="Enter password"
									secureTextEntry={secure}
								/>

								<Text
									style={{
										color: "#00a652",
										position: "absolute",
										top: 8,
										left: 20,
										fontSize: 12,
										fontFamily: "Poppins_500Medium",
									}}
								>
									Password
								</Text>
								{/* Eye Icon */}
								<Pressable
									onPress={() => setSecure(!secure)}
									style={{
										position: "absolute",
										right: 15,
										top: 20,
									}}
								>
									<Ionicons
										name={secure ? "eye-off" : "eye"}
										size={22}
										color="gray"
									/>
								</Pressable>
							</View>
							<Text
								style={{
									color: "#00a652",
									fontFamily: "Poppins_600SemiBold",
								}}
							>
								Forgot your password?
							</Text>
						</View>
					</View>

					<View
						style={{
							justifyContent: "center",
							display: "flex",
							alignItems: "center",
							gap: 32,
						}}
					>
						<View
							style={{
								backgroundColor: "#ebeeef",
								padding: 8,
								borderRadius: 8,
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: 8,
							}}
						>
							<Smartphone size={18} />
							<Text style={{ fontFamily: "Poppins_600SemiBold" }}>
								Log in with screen lock
							</Text>
						</View>

						<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
							<Text style={{ fontFamily: "Poppins_600SemiBold" }}>
								Not you?
							</Text>
							<Text
								style={{
									fontFamily: "Poppins_600SemiBold",
									color: "#00a652",
								}}
							>
								Switch account
							</Text>
						</View>

						<Pressable
							onPress={handleLogin}
							style={[styles.loginButton, { marginBottom: bottom }]}
						>
							<Text style={styles.loginText}>Log in</Text>
						</Pressable>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		color: "#00a652",
		fontFamily: "Poppins_600SemiBold",
	},
	mobileNumber: {
		fontSize: 24,
		fontFamily: "Poppins_600SemiBold",
	},
	numberContainer: {
		display: "flex",
		alignItems: "center",
		marginTop: 24,
		gap: 8,
	},
	mobileInput: {
		borderColor: "red",
		backgroundColor: "#f9f9f9",
		width: "100%",
		paddingHorizontal: 20,
		paddingBottom: 12,
		paddingTop: 28,
		borderRadius: 16,
		fontFamily: "Poppins_500Medium",
	},
	loginButton: {
		backgroundColor: "#00a652",
		width: "80%",
		marginHorizontal: 24,
		padding: 16,
		borderRadius: 16,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	loginText: {
		color: "white",
		fontFamily: "Poppins_700Bold",
	},
	accountName: {
		fontFamily: "Poppins_500Medium",
	},
});
