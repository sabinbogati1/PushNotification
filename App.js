import React from "react";
import { AsyncStorage, StyleSheet, Text, View, Alert } from "react-native";
import registerForPushNotificationsAsync from "./services/push_notifications";
import { Notifications } from "expo";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deviceToken: ""
    };
	}

  // _retrieveData = async () => {
  //   console.log("_retrieve data --");
	// 	try {
  //     const value = await AsyncStorage.getItem("pushtoken");
  //     console.log("_retrieve data -- value -- ", value);
	// 		if (value !== null) {
	// 			console.log("value ---> ", value);
	// 			this.setState({
	// 				deviceToken: value
	// 			});
	// 		}
	// 	} catch (error) {
  //     // Error retrieving data
  //     console.log("_retrieve data -- catch -- ");
	// 	}
	// };

	componentDidMount() {
		registerForPushNotificationsAsync().then(token => {
			console.log("response of registerPushNotification ---> ",token );
		//	this._retrieveData();
			this.setState({
					deviceToken: token
			});

		}).catch(err => {
			console.log("Err in registerPush Notification ---> ", err);
		})

		Notifications.addListener((notification) => {
			console.log("Noticaton Received....", notification);

			if (notification.origin === "received") {
				Alert.alert("You have received new notification", notification.data.text, [ { text: "Ok." } ]);
			}
		});
	}

	render() {
		const { deviceToken } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Welcome to ConvergeTree Push Notification</Text>
        <Text>Your Device Token: </Text>
        <Text>{deviceToken}</Text>
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
  }

});

export default App;
