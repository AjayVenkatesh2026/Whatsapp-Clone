import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./constants/colors";
import AllChatsScreen from "./screens/AllChatsScreen";
import CallsScreen from "./screens/CallsScreen";
import StatusScreen from "./screens/StatusScreen";
import ChatScreen from "./screens/ChatScreen";
import Title from "./components/Title";

export default function App() {
	const Tab = createMaterialTopTabNavigator();
	const Stack = createStackNavigator();

	function TabNavigator() {
		return (
			<>
				<Title />
				<Tab.Navigator
					style={styles.tabContainer}
					screenOptions={{
						tabBarActiveTintColor: "white",
						tabBarLabelStyle: {
							fontSize: 16,
						},
						tabBarStyle: {
							backgroundColor: Colors.primary600,
							margin: 0,
						},
						tabBarIndicatorStyle: {
							height: 12,
						},
						tabBarPressColor: Colors.primary700,
						tabBarItemStyle: {
							backgroundColor: Colors.primary600,
							margin: 0,
						},
					}}
				>
					<Tab.Screen
						name="AllChatsScreen"
						component={AllChatsScreen}
						options={{
							tabBarLabel: "Chats",
						}}
					/>
					<Tab.Screen
						name="StatusScreen"
						component={StatusScreen}
						options={{
							tabBarLabel: "Status",
						}}
					/>
					<Tab.Screen
						name="CallsScreen"
						component={CallsScreen}
						options={{
							tabBarLabel: "Calls",
						}}
					/>
				</Tab.Navigator>
			</>
		);
	}

	function StackNavigator() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="TabNavigator"
					component={TabNavigator}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="ChatScreen"
					component={ChatScreen}
					options={{
						headerShown: true,
					}}
				/>
			</Stack.Navigator>
		);
	}

	return (
		<>
			<StatusBar style="light" backgroundColor={Colors.primary600} />
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
