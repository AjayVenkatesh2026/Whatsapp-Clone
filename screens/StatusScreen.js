import { ScrollView, StyleSheet, View } from "react-native";
import AddStatus from "../components/AddStatus";
import StatusItem from "../components/StatusItem";
import StatusSubtitle from "../components/StatusSubtitle";
import { RecentUpdates, ViewedUpdates } from "../data/status-data";

function StatusScreen() {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<AddStatus />
				<StatusSubtitle>Recent Updates</StatusSubtitle>
				{RecentUpdates.map((item, index) => {
					return (
						<StatusItem
							key={item.subject}
							subject={item.subject}
							description={item.description}
						/>
					);
				})}
				<StatusSubtitle>Viewed Updates</StatusSubtitle>
				{ViewedUpdates.map((item, index) => {
					return (
						<StatusItem
							key={item.subject}
							subject={item.subject}
							description={item.description}
						/>
					);
				})}
			</View>
		</ScrollView>
	);
}

export default StatusScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "flex-start",
		justifyContent: "flex-start",
	},
});
