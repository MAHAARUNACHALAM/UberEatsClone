import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
	const [modalVisible, setmodalVisible] = useState(false);
	const items = useSelector((state) => state.cartReducer.selectedItems.items);
	const total = items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);
	const totalUSD = total.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
	const checkoutModalContext = () => {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					marginTop: 30,
				}}
			>
				<View
					style={{
						backgroundColor: "black",
						padding: 10,
						borderRadius: 30,
						width: 150,
						alignItems: "center",
					}}
				>
					<TouchableOpacity onPress={() => setmodalVisible(false)}>
						<Text style={{ color: "white" }}>CheckOut</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};
	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setmodalVisible(false)}
			>
				{checkoutModalContext()}
			</Modal>
			{total ? (
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
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "center",
								padding: 15,
								borderRadius: 30,
								width: 300,
								position: "relative",
							}}
							onPress={() => setmodalVisible(true)}
						>
							<Text style={{ color: "white", fontSize: 20, marginRight: 40 }}>
								ViewCart
							</Text>
							<Text style={{ color: "white", fontSize: 20 }}>${totalUSD}</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</>
	);
}
