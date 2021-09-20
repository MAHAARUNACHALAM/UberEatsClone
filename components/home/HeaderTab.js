import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

export default function HeaderTab(props) {
	// const [activeTab, setActiveTab] = useState("Delivery");
	return (
		<View style={{ flexDirection: "row", alignSelf: "center" }}>
			<HeaderButton
				text="Delivery"
				btncolor="black"
				textcolor="white"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				btncolor="white"
				textcolor="black"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
			{/*HeaderButton */}
			{/*HeaderButton */}
		</View>
	);
}

const HeaderButton = (props) => (
	<View>
		<TouchableOpacity
			style={{
				backgroundColor: props.activeTab == props.text ? "black" : "white",
				paddingVertical: 6,
				paddingHorizontal: 16,
				borderRadius: 30,
			}}
			onPress={() => props.setActiveTab(props.text)}
		>
			<Text
				style={{
					color: props.activeTab == props.text ? "white" : "black",
					fontSize: 15,
					fontWeight: "900",
				}}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	</View>
);
