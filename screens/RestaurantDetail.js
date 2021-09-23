import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/RestauarantDetail/About";
import MenuItems from "../components/RestauarantDetail/MenuItems";
import ViewCart from "../components/RestauarantDetail/ViewCart";

const foods = [
	{
		title: "Chicken Roast",
		description: "Amazing Indian dish with tenderlion  chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},

	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image:
			"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
	},
	{
		title: "Tandoori Chicken",
		description:
			"Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
		price: "$19",
		image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
	},
	{
		title: "Chilaquiles",
		description:
			"Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
		price: "$14.50",
		image:
			"https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
	},
	{
		title: "Leg Fry",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken Caesar Salad",
		description:
			"One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
		price: "$21.50",
		image:
			"https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
	},
];

export default function RestaurantDetail({ route, navigation }) {
	return (
		<View style={{ backgroundColor: "#eee", flex: 1 }}>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<MenuItems restaurantName={route.params.name} foods={foods} />
			</ScrollView>
			<ViewCart navigation={navigation} restaurantName={route.params.name} />
		</View>
	);
}
