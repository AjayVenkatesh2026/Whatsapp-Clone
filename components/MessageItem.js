import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

function MessageItem({ message }) {
	let icon = "";
	let iconColor = "gray";

	if (message.state && !message.received) {
		if (message.state == 1) {
			icon = "checkmark";
		} else if (message.state == 2) {
			icon = "checkmark-done";
		} else if (message.state == 3) {
			icon = "checkmark-done";
			iconColor = Colors.blue500;
		}
	}

	let messageIcon = null;

	if (!message.received) {
		messageIcon = (
			<Ionicons
				style={styles.icon}
				name={icon}
				size={16}
				color={iconColor}
			/>
		);
	}

	return (
		<View
			style={[
				styles.container,
				!message.received && { alignSelf: "flex-end" },
			]}
		>
			<View
				style={[
					message.received
						? styles.triangleLeft
						: styles.triangleRight,
					{
						borderTopColor: message.received
							? "white"
							: Colors.primary400,
					},
				]}
			></View>
			<View
				style={[
					styles.contentContainer,
					{
						backgroundColor: message.received
							? "white"
							: Colors.primary400,
					},
				]}
			>
				<Text style={styles.message}>{message.message}</Text>
				<View style={styles.subscriptContainer}>
					<Text style={styles.time}>{message.time}</Text>
					{messageIcon}
				</View>
			</View>
		</View>
	);
}

export default MessageItem;

const styles = StyleSheet.create({
	container: {
		maxWidth: "80%",
		elevation: 1,
		borderWidth: 1,
		borderColor: Colors.gray500,
		borderRadius: 8,
		marginVertical: 4,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "flex-start",
		marginHorizontal: 6,
	},
	triangleLeft: {
		position: "absolute",
		width: 0,
		height: 0,
		top: 0,
		left: -6,
		borderLeftWidth: 16,
		borderTopWidth: 16,
		borderLeftColor: "transparent",
		borderRadius: 4,
	},
	triangleRight: {
		position: "absolute",
		width: 0,
		height: 0,
		top: 0,
		right: -8,
		borderRightWidth: 16,
		borderTopWidth: 16,
		borderRightColor: "transparent",
		borderRadius: 4,
	},
	contentContainer: {
		alignSelf: "flex-start",
		padding: 8,
		flexDirection: "row",
		borderRadius: 8,
	},
	message: {},
	subscriptContainer: {
		paddingLeft: 12,
		paddingRight: 4,
		paddingBottom: 2,
		position: "relative",
		flexDirection: "row",
		bottom: -6,
	},
	time: {
		fontSize: 12,
		color: "gray",
	},
	icon: {
		paddingLeft: 4,
	},
});
