import React from "react";
import { View, Text, Image } from "react-native";

// const yelpRestaurantInfo = {
// 	name: "Farmhouse Kitchen Thai Cuisine",
// 	image:
// 		"https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
// 	price: "$$",
// 	reviews: "1500",
// 	rating: 5,
// 	categories: [{ title: "Thai" }, { title: "Comfort Food" }],
// };

// const image =
// 	"https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg";

// const title = "Farmhouse Kitchen Thai Cusine";
// const description = "Thai.Comfort Fod .$$. :tik . 4 *(2913+) ";

export default function About(props) {
	const { name, image, price, reviews, rating, categories } =
		props.route.params;
	const formattedCategories = categories.map((cat) => cat.title).join("•");

	const description = `${formattedCategories} ${
		price ? "•" + price : ""
	} • 🎫 • ${rating} ⭐ (${reviews}+)`;
	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantName name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
}

const RestaurantImage = (props) => (
	<Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "600",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.name}
	</Text>
);

const RestaurantDescription = (props) => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: "400",
			fontSize: 15.5,
		}}
	>
		{props.description}
	</Text>
);
