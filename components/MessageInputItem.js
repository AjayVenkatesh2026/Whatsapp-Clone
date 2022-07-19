import { StyleSheet, TextInput, View } from "react-native";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	FontAwesome,
	Ionicons,
} from "@expo/vector-icons";
import { Colors } from "../constants/colors";

function MessageInputItem({ style }) {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.inputContainer}>
				<MaterialIcons
					style={styles.icon}
					name="insert-emoticon"
					size={24}
					color="gray"
				/>
				<View style={styles.input}>
					<TextInput placeholder="Message" />
				</View>
				<MaterialCommunityIcons
					style={[
						styles.icon,
						{ transform: [{ rotateZ: "-45deg" }] },
					]}
					name="paperclip"
					size={20}
					color="gray"
				/>
				<View style={styles.rupeeIconContainer}>
					<FontAwesome
						style={[styles.icon, styles.rupeeIcon]}
						name="rupee"
						size={12}
						color="white"
					/>
				</View>
				<FontAwesome
					style={styles.icon}
					name="camera"
					size={20}
					color="gray"
				/>
			</View>
			<View style={styles.micIconContainer}>
				<Ionicons
					style={[styles.icon, styles.micIcon]}
					name="mic"
					size={24}
					color="white"
				/>
			</View>
		</View>
	);
}

export default MessageInputItem;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 16,
		backgroundColor: "white",
	},
	input: {
		flex: 1,
	},
	icon: {
		padding: 8,
	},
	rupeeIconContainer: {
		height: 26,
		width: 26,
		backgroundColor: "gray",
		borderRadius: 16,
		justifyContent: "center",
		alignItems: "center",
		margin: 0,
		padding: 0,
	},
	rupeeIcon: {
		padding: 0,
		margin: 0,
	},
	micIconContainer: {
		height: 40,
		width: 40,
		backgroundColor: Colors.primary600,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		margin: 0,
		padding: 0,
	},
	micIcon: {
		margin: 0,
		padding: 0,
	},
});
