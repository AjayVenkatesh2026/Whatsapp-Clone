import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatItem from "../components/ChatItem";
import { chats } from "../constants/chat-data";
import { useNavigation } from "@react-navigation/native";

function AllChatsScreen() {
	const dumPerson = chats[0];
	const navigation = useNavigation();

	function chatItemClickHanldler() {
		navigation.navigate("ChatScreen");
	}

	return (
		<View style={styles.container}>
			<ChatItem personObj={dumPerson} onPress={chatItemClickHanldler} />
		</View>
	);
}

export default AllChatsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
});
