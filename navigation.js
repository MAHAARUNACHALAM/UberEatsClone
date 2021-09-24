import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import ConfigureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import Login from "./screens/Login";

const store = ConfigureStore();
export default function RootNavigation() {
	const Stack = createStackNavigator();
	const screenOptions = {
		headerShown: false,
	};
	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
					<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
				</Stack.Navigator>
			</NavigationContainer>
		</ReduxProvider>
	);
}
