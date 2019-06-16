import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { AsyncStorage, Alert } from "react-native";
// import axios from "axios";

export default async () => {
	let previousToken = await AsyncStorage.getItem("pushtoken");

	if (previousToken) {
		console.log("if...");
		Alert.alert("Your P. Device Token", previousToken, [ { text: "Ok." } ]);
		return previousToken;
	} else {
		console.log("else...");
        let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

        console.log("--- permission push notification ---", status);

		if (status !== "granted") {
			// Alert.alert("Warning!!!", "NOTIFICATION Permission has Rejected", [ { text: "Ok." } ]);
			return;
		}

		let token = await Notifications.getExpoPushTokenAsync();
		console.log(" token --> ", token);
		//await axios.post(PUSH_ENDPOINT, { token: { token } });
		AsyncStorage.setItem("pushtoken", token);
		Alert.alert("Your Device Token", token, [ { text: "Ok." } ]);
		return token;
	}
};
