import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import ChatHeader from "../components/ChatHeader";
import MessageInputItem from "../components/MessageInputItem";

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
					<View style={styles.messagesContainer}>
						<Text>Something</Text>
					</View>
					<MessageInputItem />
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
		padding: 8,
		opacity: 0.7,
	},
	messagesContainer: {
		flex: 1,
	},
});
