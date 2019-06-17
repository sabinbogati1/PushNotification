import React, { Component } from "react";
import {StyleSheet, Text, View, Image } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#9DD6EB"
	},
	slide2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#97CAE5"
	},
	slide3: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#92BBD9"
	},
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold"
	}
});

class Carousel extends Component {
	render() {
		return (
			<Swiper showsButtons={true}>
				<View style={styles.slide1}>
					<Image source={require("../../assets/bear.jpg")} />
				</View>
				<View style={styles.slide2}>
					<Image source={require("../../assets/fox.jpg")} />
				</View>
				<View style={styles.slide3}>
					<Image source={require("../../assets/tree.jpg")} />
				</View>
			</Swiper>
		);
	}
}

export default Carousel;
