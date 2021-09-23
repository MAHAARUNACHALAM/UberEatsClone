import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantLike(props) {
	const Like = "#fff";
	const [like, setLike] = useState(false);
	return (
		<>
			<Image
				source={{
					uri: props.image,
				}}
				style={{ width: "100%", height: 180 }}
			/>
			<LikeButton like={like} setLike={setLike} />
		</>
	);
}

const LikeButton = (props) => (
	<TouchableOpacity
		style={{ position: "absolute", right: 20, marginTop: 20 }}
		onPress={() => {
			props.like ? props.setLike(false) : props.setLike(true);
		}}
	>
		<MaterialCommunityIcons
			name="heart-outline"
			size={25}
			color={props.like ? "red" : "#fff"}
		/>
	</TouchableOpacity>
);
