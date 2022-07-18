import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

function StatusSubtitle({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}

export default StatusSubtitle;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 8,
		marginLeft: 4,
	},
	text: {
		fontSize: 12,
		fontWeight: "bold",
		color: "gray",
	},
});
