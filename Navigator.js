import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator >
    )
}