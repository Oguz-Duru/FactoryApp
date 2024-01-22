import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from "./Navigator";
import MapView, { Marker } from 'react-native-maps';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Register' component={Register} />
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='Home' component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
