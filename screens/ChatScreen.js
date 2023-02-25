import { FlatList, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import ChatHeader from "../components/ChatHeader";
import MessageInputItem from "../components/MessageInputItem";
import MessageItem from "../components/MessageItem";
import { Colors } from "../constants/colors";
import { messages } from "../data/messages-data";

function ChatScreen({ navigation, route }) {
	const person = route.params.personData;

	return (
		<>
			<ChatHeader
				name={person.name}
				description={person.lastChated}
				onPressBack={() => {
					navigation.goBack();
				}}
			/>
			<View style={styles.container}>
				<ImageBackground
					source={require("../assets/images/background-image.jpg")}
					resizeMode="cover"
					style={styles.imageBackground}
				>
					<View style={styles.mask}>
						<View style={styles.messagesContainer}>
							<FlatList
								style={styles.messagesList}
								data={messages}
								renderItem={(itemData) => (
									<MessageItem
										key={itemData.item.message}
										message={itemData.item}
									/>
								)}
								inverted
							/>
						</View>
						<MessageInputItem />
					</View>
				</ImageBackground>
			</View>
		</>
	);
}

export default ChatScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBackground: {
		flex: 1,
	},
	mask: {
		flex: 1,
		padding: 8,
		opacity: 0.7,
		backgroundColor: Colors.mask,
	},
	messagesContainer: {
		flex: 1,
	},
	messagesList: {
		width: "100%",
	},
});
