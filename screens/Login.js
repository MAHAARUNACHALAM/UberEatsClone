import React, { Fragment, useState, useEffect, setState } from "react";
import {
	View,
	Text,
	TextInput,
	ImageBackground,
	ScrollView,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import CountryPicker, {
	CountryModalProvider,
} from "react-native-country-picker-modal";

export default function Login({ navigation }) {
	// const [countryCode, setCountryCode] = useState();
	const [show, setShow] = useState(true);
	const [withCallingCode, setWithCallingCode] = useState(true);
	const [withAlphaFilter, setWithAlphaFilter] = useState(true);
	const [withFilter, setwithFilter] = useState(true);
	const [countryCode, setCountryCode] = useState("+91");
	const [visible, setVisible] = useState(false);
	const getcountryCode = () => {
		return countryCode;
	};
	useEffect(() => {
		getcountryCode();
		console.log("Changes Happened");
	}, [countryCode]);
	const countryChange = ({ flag }) => {
		setState((state) => ({
			...state,
			flag: flag,
		}));
	};
	return (
		<Fragment>
			{/* <View style={{ flex: 1, height: "75%" }}> */}
			<ImageBackground
				source={require("../assets/images/bg.jpg")}
				style={{ flex: 1, justifyContent: "center", height: "75%" }}
				resizeMode="cover"
			>
				{/* </View> */}
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "flex-start",
						marginTop: 550,
						backgroundColor: "white",
						position: "relative",
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "500",
							fontStyle: "normal",
							justifyContent: "space-evenly",
							marginLeft: 10,
						}}
					>
						Use your Uber account to get started
					</Text>
					<View
						style={{
							flex: 0,
							borderWidth: 0.5,
							borderColor: "grey",
							height: 50,
							marginTop: 20,
							width: "100%",
							position: "relative",
							alignItems: "center",
							justifyContent: "space-evenly",
							backgroundColor: "lightgrey",
							flexDirection: "row",
						}}
					>
						<View>
							<CountryPicker
								// {...{
								// 	countryCode,
								// 	withCallingCode,
								// 	// withAlphaFilter,
								// 	withFilter,
								// 	// onSelect,
								// }}
								withFlagButton={true}
								withFilter
								withFlag
								modalProps={{
									visible: visible,
								}}
								placeholder={countryCode}
								onOpen={() => setVisible(true)}
								onClose={() => setVisible(false)}
								onChange={(value) => this.setState({ countryCode: value })}
								// when picker button press you will get the country object with dial code
								pickerButtonOnPress={(item) => {
									// setCountryCode(item.dial_code);
									countryChange(item.flag);
								}}

								// visible
							/>
						</View>

						<TextInput
							placeholder="08123456789"
							placeholderTextColor="grey"
							textContentType="telephoneNumber"
							style={{ alignItems: "center" }}
							// onChangeText={(text) => this.setState({ mobNo: text })}
						></TextInput>
					</View>
					<View style={{ marginTop: 20 }}>
						<TouchableOpacity
							style={{
								backgroundColor: "green",
								paddingVertical: 6,
								paddingHorizontal: 16,
								borderRadius: 30,
							}}
							onPress={() => navigation.navigate("Home")}
						>
							<Text>---&gt;Submit</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</Fragment>
	);
}
