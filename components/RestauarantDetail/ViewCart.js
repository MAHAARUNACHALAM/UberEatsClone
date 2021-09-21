import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ViewCart() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				flexDirection: "row",
				position: "absolute",
				justifyContent: "center",
				bottom: 10,
				zIndex: 999,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<TouchableOpacity
					style={{
						marginTop: 20,
						backgroundColor: "black",
						alignItems: "center",
						padding: 13,
						borderRadius: 30,
						width: 300,
						position: "relative",
					}}
				>
					<Text style={{ color: "white", fontSize: 20 }}>ViewCart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
