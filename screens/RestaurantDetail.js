import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/RestauarantDetail/About";
import MenuItems from "../components/RestauarantDetail/MenuItems";
import ViewCart from "../components/RestauarantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
	return (
		<View style={{ backgroundColor: "#eee", flex: 1 }}>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<MenuItems restaurantName={route.params.name} />
			</ScrollView>
			<ViewCart navigation={navigation} restaurantName={route.params.name} />
		</View>
	);
}
