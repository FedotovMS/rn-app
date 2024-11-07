import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CameraScreen from "../screens/CameraScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen
        name="Posts"
        component={BottomTabNavigator}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Camera"
        component={CameraScreen}
      />
      <Stack.Screen
        name="Map"
        options={{ headerShown: true }}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
