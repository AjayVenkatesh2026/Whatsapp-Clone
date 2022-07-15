import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { Colors } from "./constants/colors";

export default function App() {
	const Tab = createMaterialTopTabNavigator();
	const Stack = createStackNavigator();

	return (
		<>
			<StatusBar style="auto" backgroundColor={Colors.primary700} />
			<Text>Hello World!</Text>
		</>
	);
}

const styles = StyleSheet.create({});
