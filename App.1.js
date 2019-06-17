import React from "react";
import { AsyncStorage, StyleSheet, Text, View, Alert } from "react-native";
import registerForPushNotificationsAsync from "./services/push_notifications";
import { Notifications } from "expo";
import Swiper from 'react-native-swiper';
// import Carousel from "./components/carousel/Carousel";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deviceToken: ""
		};
	}

	componentDidMount() {
		registerForPushNotificationsAsync()
			.then((token) => {
				console.log("response of registerPushNotification ---> ", token);
				this.setState({
					deviceToken: token
				});
			})
			.catch((err) => {
				console.log("Err in registerPush Notification ---> ", err);
			});

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
			<View>
			 <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
				</Swiper>

				<View style={styles.container}>
					<Text style={styles.header}>Welcome to ConvergeTree Push Notification</Text>
					<Text>Your Device Token: </Text>
					<Text>{deviceToken}</Text>
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
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default App;
