import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Colors } from "../constants/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";

function Title() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Whatsapp</Text>
			<View style={styles.innerContainer}>
				<Ionicons
					style={styles.icon}
					name="search"
					size={20}
					color="white"
				/>
				<Entypo
					style={styles.icon}
					name="dots-three-vertical"
					size={20}
					color="white"
				/>
			</View>
		</View>
	);
}

export default Title;

const styles = StyleSheet.create({
	container: {
		minHeight: 20,
		marginTop: StatusBar.currentHeight + 4,
		padding: 16,
		backgroundColor: Colors.primary600,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "500",
	},
	innerContainer: {
		flexDirection: "row",
	},
	icon: {
		padding: 4,
		marginHorizontal: 8,
	},
});
