import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatItem from "../components/ChatItem";
import { chats } from "../data/chat-data";
import { useNavigation } from "@react-navigation/native";

function AllChatsScreen() {
	// const dumPerson = chats[0];
	const navigation = useNavigation();

	function chatItemClickHanldler(person) {
		navigation.navigate("ChatScreen", { personData: person });
	}

	function renderItemHandler(itemData) {
		return (
			<ChatItem
				key={itemData.item.name}
				personObj={itemData.item}
				onPress={chatItemClickHanldler.bind(this, itemData.item)}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={chats}
				renderItem={renderItemHandler}
				keyExtractor={(item, index) => {
					return item.name;
				}}
				showsVerticalScrollIndicator={false}
			/>
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
	list: {
		flex: 1,
		width: "100%",
		margin: 0,
		padding: 0,
	},
});
