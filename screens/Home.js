import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTab from "../components/home/HeaderTab";

import Restaurantitems, {
	localRestaurants,
} from "../components/home/Restaurantitems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_Key =
	"#Type Your Yelp Key Here";

export default function Home({ navigation }) {
	const [restaurantData, setrestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState("Los Angeles");
	const [activeTab, setActiveTab] = useState("Delivery");

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_Key}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setrestaurantData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
		// console.log("Changes Happened");
	}, [city, activeTab]);

	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<Restaurantitems
					restaurantData={restaurantData}
					navigation={navigation}
				/>
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
	);
}
