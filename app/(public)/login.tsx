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
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
	const [secure, setSecure] = useState(true);

	const route = useRouter();

	const handleLogin = () => {
		route.push("/home");
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
							<Text>John Doe</Text>
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
									keyboardType="visible-password"
									secureTextEntry={secure}
								/>

								<Text
									style={{
										color: "#00a652",
										position: "absolute",
										top: 8,
										left: 20,
										fontSize: 12,
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
							<Text style={{ color: "#00a652", fontWeight: 500 }}>
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
							<Smartphone />
							<Text style={{ fontWeight: 600 }}>Log in with screen lock</Text>
						</View>

						<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
							<Text style={{ fontWeight: "600" }}>Not you?</Text>
							<Text style={{ fontWeight: "600", color: "#00a652" }}>
								Switch account
							</Text>
						</View>

						<Pressable onPress={handleLogin} style={styles.loginButton}>
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
		fontWeight: 700,
		color: "#00a652",
	},
	mobileNumber: {
		fontSize: 24,
		fontWeight: 600,
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
		padding: 20,
		paddingTop: 28,
		borderRadius: 16,
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
		fontWeight: "bold",
		fontSize: 16,
	},
});
