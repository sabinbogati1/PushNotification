import React, { Component } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { SQLite } from 'expo-sqlite'
import { ScrollView } from "react-native-gesture-handler";

const db = SQLite.openDatabase('notifications');
class NotificationScreen extends Component {

	static navigationOptions = {
		title: 'Notifications',
		headerStyle: {
			backgroundColor: '#ff7800',
		  }
	  };

	constructor(props) {
		super(props);
		this.state = {
			notifications: []
		}
	}

	componentDidMount() {
		db.transaction(tx => {
			tx.executeSql(
			  `select * from items`,
			 null,
				(tx, results) => {
					let notifications = results.rows._array;
					notifications.reverse();
					this.setState({
						notifications: notifications
					});
			 }
			);
		  });
	}

	renderListNotification(item) {
		return (
			<View style={styles.container}>
				<Text> Message Title:: {item.messageTitle}</Text>
				<Text> Message Body ::  {item.messageBody}</Text>
			</View>
		);
	}

	render() {
		const {notifications} = this.state;
		return (
			<View >
				{notifications.length === 0 ? <Text>You don't have any Notifications.</Text> : <FlatList
					keyExtractor={item => item.id.toString()}
					data={notifications}
					renderItem={
						({ item }) => <ScrollView>{this.renderListNotification(item)}</ScrollView>
					}
				/>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: "100%",
		backgroundColor: "grey",
		margin: 5
	}
});

export default NotificationScreen;
