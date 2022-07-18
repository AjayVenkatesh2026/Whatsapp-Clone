import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { useLayoutEffect, useState } from "react";

function ChatItem({ personObj, onPress }) {
	const [maxDescriptionChars, setMaxDescriptionChars] = useState();
	// const [description, setDescription] = useState("");

	// function descriptionOnLayoutHandler(event) {
	// 	const width = event.nativeEvent.layout.width;
	// 	const chars = Math.floor(width / 7);
	// 	setMaxDescriptionChars(chars);
	// }

	// useLayoutEffect(() => {
	// 	if (personObj.description.length > maxDescriptionChars) {
	// 		console.log(
	// 			personObj.name,
	// 			personObj.description.length,
	// 			maxDescriptionChars
	// 		);
	// 		setDescription(
	// 			personObj.description.slice(0, maxDescriptionChars - 3) + "..."
	// 		);
	// 	}
	// }, [maxDescriptionChars, personObj]);

	return (
		<Pressable onPress={onPress} style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<View style={styles.iconOuterContainer}>
					<View style={styles.iconContainer}>
						<Ionicons
							style={styles.icon}
							name="person"
							size={32}
							color={"white"}
						/>
					</View>
				</View>
				<View style={styles.textOuterContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.name}>{personObj.name}</Text>
						<Text
							// onLayout={descriptionOnLayoutHandler}
							style={styles.description}
						>
							{personObj.description}
						</Text>
					</View>
					<View style={styles.badgeContainer}>
						<View style={styles.timeBadgeContainer}>
							<Text
								style={[
									styles.timeBadgeText,
									personObj.notifications &&
										styles.coloredTimeBadge,
								]}
							>
								{personObj.lastChated}
							</Text>
						</View>
						<View
							style={
								personObj.notifications &&
								styles.notificationsBadgeContainer
							}
						>
							<Text
								style={
									personObj.notifications &&
									styles.notificationsBadgeText
								}
							>
								{personObj.notifications > 999
									? "999+"
									: personObj.notifications != 0
									? personObj.notifications
									: ""}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</Pressable>
	);
}

export default ChatItem;

const styles = StyleSheet.create({
	outerContainer: {
		width: "100%",
		padding: 8,
	},
	innerContainer: {
		flex: 1,
		alignSelf: "flex-start",
		flexDirection: "row",
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
	name: {
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
	badgeContainer: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	timeBadgeContainer: {
		padding: 2,
		alignSelf: "flex-end",
	},
	timeBadgeText: {
		fontSize: 10,
	},
	coloredTimeBadge: {
		color: Colors.primary500,
	},
	notificationsBadgeContainer: {
		paddingVertical: 4,
		paddingHorizontal: 9,
		borderRadius: 100,
		backgroundColor: Colors.primary500,
	},
	notificationsBadgeText: {
		color: Colors.gray500,
		fontSize: 12,
	},
});
