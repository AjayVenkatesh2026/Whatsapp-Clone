import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

function CallItem({ subject, description, received, videoCalled }) {
	return (
		<Pressable style={styles.outerContainer}>
			<View style={styles.iconOuterContainer}>
				<View style={styles.iconContainer}>
					<Ionicons name="person" size={24} color="gray" />
				</View>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.subject}>{subject}</Text>
				<View style={styles.descriptionContainer}>
					<Ionicons
						style={received ? styles.receivedIcon : styles.sentIcon}
						name="arrow-up-sharp"
						size={20}
						color={received ? Colors.red500 : Colors.primary600}
					/>
					<Text style={styles.description}>{description}</Text>
				</View>
			</View>
			<View styles={styles.callIconContainer}>
				<Ionicons
					style={styles.callIcon}
					name={videoCalled ? "videocam" : "call"}
					color={"gray"}
					size={24}
				/>
			</View>
		</Pressable>
	);
}

export default CallItem;

const styles = StyleSheet.create({
	outerContainer: {
		width: "100%",
		padding: 8,
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
	},
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
	descriptionContainer: {
		height: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	sentIcon: {
		paddingTop: 4,
		transform: [
			{
				rotateZ: "45deg",
			},
		],
	},
	receivedIcon: {
		paddingBottom: 4,
		transform: [
			{
				rotateZ: "215deg",
			},
		],
	},
	description: {
		fontSize: 14,
		paddingLeft: 8,
		width: "100%",
		overflow: "hidden",
	},

	callIconContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	callIcon: {
		padding: 4,
	},
});
