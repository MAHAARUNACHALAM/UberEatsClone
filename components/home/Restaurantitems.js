import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RestaurantLike from "./RestaurantLike";

export const localRestaurants = [
	{
		name: "BeachSide Bar",
		image_url:
			"https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
		categories: ["cafe", "Bar"],
		price: "Rs",
		reviews: 1244,
		rating: 4.5,
	},
	{
		name: "Behina",
		image_url:
			"https://upload.wikimedia.org/wikipedia/commons/7/7e/Benihana_restaurant_%28Manhattan%2C_New_York%29.jpg",
		categories: ["cafe", "Bar"],
		price: "Rs",
		reviews: 1244,
		rating: 4.7,
	},
];

export default function Restaurantitems({ navigation, ...props }) {
	// const [like, setLike] = useState(false);
	return (
		<>
			{props.restaurantData.map((restaurant, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={1}
					style={{ marginBottom: 30 }}
					onPress={() =>
						navigation.navigate("RestaurantDetail", {
							name: restaurant.name,
							image: restaurant.image_url,
							price: restaurant.price,
							reviews: restaurant.review_count,
							rating: restaurant.rating,
							categories: restaurant.categories,
						})
					}
				>
					<View
						style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
					>
						<RestaurantLike image={restaurant.image_url} />
						{/*<RestaurantImage/> */}
						<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
					</View>
				</TouchableOpacity>
			))}
		</>
	);
}

// const RestaurantImage = (props) => (
// 	<>
// 		<Image
// 			source={{
// 				uri: props.image,
// 			}}
// 			style={{ width: "100%", height: 180 }}
// 		/>
// 		<TouchableOpacity
// 			style={{ position: "absolute", right: 20, marginTop: 20 }}
// 			// onPress={}
// 		>
// 			<MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
// 		</TouchableOpacity>
// 	</>
// );

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 10,
		}}
	>
		<View>
			<Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
			<Text style={{ fontSize: 13, color: "gray" }}>30-45 .min </Text>
		</View>
		<View
			style={{
				backgroundColor: "#eee",
				height: 30,
				width: 30,
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 15,
			}}
		>
			<Text>{props.rating}</Text>
		</View>
	</View>
);
