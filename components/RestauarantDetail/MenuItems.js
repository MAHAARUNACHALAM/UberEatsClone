import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
const foods = [
	{
		title: "Tandoori Chicken",
		description: "Amazing Indian dish with tenderlion  chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 652",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 653",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 654",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-5",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-6",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-7",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-8",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-8",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-8",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-8",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
	{
		title: "Chicken 65-12",
		description: "Amazing Indian dish with tenderloi8n chicken off the sizzles",
		price: "$19.20",
		image: "https://thumbs.dreamstime.com/b/tandoori-chicken-18117606.jpg",
	},
];

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},

	titleStyle: {
		fontSize: 19,
		fontWeight: "bold",
	},
});

export default function MenuItems({ restaurantName }) {
	const dispatch = useDispatch();
	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				...item,
				restaurantName: restaurantName,
				checkboxValue: checkboxValue,
			},
		});

	const cartItems = useSelector(
		(state) => state.cartReducer.selectedItems.items
	);
	const isFoodInCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title === food.title));
	return (
		<>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItemStyle}>
						<BouncyCheckbox
							iconStyle={{
								borderColor: "lightgray",
								borderRadius: 0,
							}}
							fillColor="green"
							onPress={(checkboxValue) => selectItem(food, checkboxValue)}
							isChecked={isFoodInCart(food, cartItems)}
						/>
						<FoodInfo food={food} />
						<FoodImage food={food} />
					</View>
					<Divider
						width={0.5}
						orientation="vertical"
						style={{ marginHorizontal: 20 }}
					/>
				</View>
			))}
		</>
	);
}

const FoodInfo = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const FoodImage = (props) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{ width: 100, height: 100, borderRadius: 8 }}
		/>
	</View>
);
