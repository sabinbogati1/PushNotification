import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Image, TouchableHighlight } from "react-native";
import registerForPushNotificationsAsync from "./services/push_notifications";
import { Notifications, Constants } from "expo";
import { SQLite } from "expo-sqlite";
import Carousel from "./components/carousel/Carousel";

const db = SQLite.openDatabase("notifications");

class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Home',
		headerStyle: {
			backgroundColor: '#ff7800',
		  }
	  };

	constructor(props) {
		super(props);
		this.state = {
			deviceToken: ""
		};
	}

	componentDidMount() {
		db.transaction((tx) => {
			tx.executeSql(
				"create table if not exists items (id integer primary key not null, messageTitle text, messageBody text, dateTime text);"
			);
			console.log("Created table..... ");
		});

		registerForPushNotificationsAsync()
			.then((token) => {
				this.setState({
					deviceToken: token
				});
			})
			.catch((err) => {
				console.log("Err in registerPush Notification ---> ", err);
			});

		Notifications.addListener((notification) => {
			if (notification.origin === "received") {
				db.transaction(
					(tx) => {
						tx.executeSql("insert into items (messageTitle, messageBody) values (?, ?)", [
							notification.data.title,
							notification.data.messageBody
						]);
					},
					null,
					() => {
						console.log("Succesfully Saved to database");
					},
					(a, b) => {
						console.log("Error while saving to database :: ", b);
					}
				);

				Alert.alert("You have received new notification", notification.data.messageBody, [ { text: "Ok." } ]);
			}
		});
	}

	_onPressNotification() {
		const { navigate } = this.props.navigation;
		navigate("NotificationScreen");
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
			<View  style={{ height: "100%" }} >
				<View style={{ height: "50%" }}>
					<Carousel />
				</View>

				<View style={{ display: "flex", height:"50%", flexDirection: "row", flexWrap: "wrap" }}>

					<TouchableHighlight
						style={{ width: "50%", height: "33.33%", backgroundColor: "yellow" }}
						onPress={this._onPressNotification.bind(this)}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Notification</Text>
						</View>
					</TouchableHighlight>


					<TouchableHighlight
						style={{ width: "50%", height: "33.33%", backgroundColor: "orange" }}
						onPress={this._onPressInformation}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Information</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: "33.33%", backgroundColor: "red" }}
						onPress={this._onPressAbout}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>About</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: "33.33%", backgroundColor: "green" }}
						onPress={this._onPressSchedule}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Schedule</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: "33.33%", backgroundColor: "navy" }}
						onPress={this._onPressInfo}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Info</Text>
						</View>
					</TouchableHighlight>

					<TouchableHighlight
						style={{ width: "50%", height: "33.33%", backgroundColor: "gray" }}
						onPress={this._onPressInfo}
						underlayColor="white"
					>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Info</Text>
						</View>
					</TouchableHighlight>
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
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold"
	},
	buttonText: {
		padding: "auto"
	}
});

export default HomeScreen;
