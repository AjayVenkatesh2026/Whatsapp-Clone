import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

function AddStatus() {
	return (
		<Pressable style={styles.outerContainer}>
			<View style={styles.iconOuterContainer}>
				<View style={styles.iconContainer}>
					<Ionicons name="person" size={24} color="gray" />
				</View>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.subject}>My Status</Text>
				<Text style={styles.description}>Tap to add status update</Text>
			</View>
		</Pressable>
	);
}

export default AddStatus;

const styles = StyleSheet.create({
	outerContainer: {
		width: "100%",
		padding: 8,
		alignSelf: "flex-start",
		flexDirection: "row",
	},
	innerContainer: {},
	iconOuterContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	iconContainer: {
		width: 52,
		height: 52,
		backgroundColor: Colors.gray600,
		borderRadius: 52 / 2,
		marginRight: 12,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {},
	textOuterContainer: {
		flex: 5,
		flexDirection: "row",
	},
	textContainer: {
		flex: 4,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	subject: {
		height: 20,
		fontWeight: "bold",
		fontSize: 16,
	},
	description: {
		fontSize: 14,
		height: 20,
		width: "100%",
		overflow: "hidden",
	},
});
