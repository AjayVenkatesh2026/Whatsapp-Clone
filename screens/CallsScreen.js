import { FlatList, StyleSheet, Text, View } from "react-native";
import CallItem from "../components/CallItem";
import { calls } from "../data/calls-data";

function CallsScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				data={calls}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<CallItem
							key={item.subject}
							subject={item.subject}
							description={item.description}
							received={item.received}
							videoCalled={item.videoCalled}
						/>
					);
				}}
			/>
		</View>
	);
}

export default CallsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
