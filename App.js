import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  NotificationScreen: {screen: NotificationScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

