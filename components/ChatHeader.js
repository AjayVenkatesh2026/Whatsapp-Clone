import { Pressable, StyleSheet, View, Text, StatusBar } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

function ChatHeader({ name, description, onPressBack }) {
	return (
		<View style={styles.container}>
			<Ionicons
				style={styles.icon}
				name="arrow-back"
				size={24}
				color={"white"}
				onPress={onPressBack}
			/>
			<View style={styles.iconOuterContainer}>
				<View style={styles.iconContainer}>
					<Ionicons name="person" size={24} color="gray" />
				</View>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.description}>
					last seen on {description}
				</Text>
			</View>
			<Ionicons
				style={styles.icon}
				name="videocam"
				size={24}
				color={"white"}
			/>
			<Ionicons
				style={styles.icon}
				name="call"
				size={24}
				color={"white"}
			/>
			<Entypo
				style={styles.icon}
				name="dots-three-vertical"
				size={24}
				color={"white"}
			/>
		</View>
	);
}

export default ChatHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: Colors.primary600,
		alignItems: "center",
		paddingVertical: 6,
		marginTop: StatusBar.currentHeight + 8,
	},
	iconOuterContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	iconContainer: {
		width: 40,
		height: 40,
		backgroundColor: Colors.gray600,
		borderRadius: 40 / 2,
		marginRight: 0,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		flex: 1,
		marginHorizontal: 8,
	},
	title: {
		fontWeight: "bold",
		fontSize: 16,
		color: "white",
		height: 24,
	},
	description: {
		color: "white",
		height: 20,
	},
	icon: {
		padding: 6,
	},
});
