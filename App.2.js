import React from "react";
import { AsyncStorage, StyleSheet, Text, View, Alert, Image, TouchableHighlight } from "react-native";
import registerForPushNotificationsAsync from "./services/push_notifications";
import { Notifications } from "expo";
import Swiper from "react-native-swiper";
import Carousel from "./components/carousel/Carousel";
//  import Carousel from "./components/carousel/Carousel";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deviceToken: ""
		};
	}

	// componentDidMount() {
	// 	registerForPushNotificationsAsync()
	// 		.then((token) => {
	// 			console.log("response of registerPushNotification ---> ", token);
	// 			this.setState({
	// 				deviceToken: token
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			console.log("Err in registerPush Notification ---> ", err);
	// 		});

	// 	Notifications.addListener((notification) => {
	// 		console.log("Noticaton Received....", notification);

	// 		if (notification.origin === "received") {
	// 			Alert.alert("You have received new notification", notification.data.text, [ { text: "Ok." } ]);
	// 		}
	// 	});
	// }

	_onPressNotification() {
		Alert.alert("You tapped the Notification!");
	}

	_onPressInformation() {
		Alert.alert("You tapped the Information!");
	}

	_onPressAbout() {
		Alert.alert("You tapped the About!");
	}

	_onPressSchedule() {
		Alert.alert("You tapped the Schedule!");
	}

	_onPressInfo() {
		Alert.alert("You tapped the Info!");
	}

	render() {
		const { deviceToken } = this.state;
		return (
			<View>
				<View style={{ height: 300 }}>
					<Carousel />
				</View>

				<View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
					<TouchableHighlight
						style={{ width: "50%", height: 70, backgroundColor: "yellow" }}
						onPress={this._onPressNotification}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Notification</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: 70, backgroundColor: "orange" }}
						onPress={this._onPressInformation}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Information</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: 70, backgroundColor: "red" }}
						onPress={this._onPressAbout}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>About</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: 70, backgroundColor: "green" }}
						onPress={this._onPressSchedule}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Schedule</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: 70, backgroundColor: "navy" }}
						onPress={this._onPressInfo}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Info</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: 70, backgroundColor: "gray" }}
						onPress={this._onPressInfo}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Info</Text>
						</View>
					</TouchableHighlight>

					{/* <View style={{ width: '50%', height: 50, backgroundColor: "orange" }} />
					<View style={{ width: '50%',  height: 50, backgroundColor: "red" }} />
					<View style={{ width: '50%', height: 50, backgroundColor: "green" }} />
					<View style={{ width: '50%',  height: 50, backgroundColor: "navy" }} />
					<View style={{ width: '50%',  height: 50, backgroundColor: "gray" }} /> */}
				{/* </View> */}

				{/* <View style={{ flex: 1, flexDirection: "row" }}>
					<View style={{ width: '50%',  height: 50, backgroundColor: "red" }} />
					<View style={{ width: '50%',  height: 50, backgroundColor: "green" }} />
				</View>

				<View style={{ flex: 1, flexDirection: "row" }}>
					<View style={{ width: '50%',  height: 50, backgroundColor: "navy" }} />
					<View style={{ width: '50%',  height: 50, backgroundColor: "gray" }} />
				</View> */}
				</View>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ff7800"
	},
	header: {
		marginBottom: 5
	},
	wrapper: {
		height: 200
	},
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

export default App;
