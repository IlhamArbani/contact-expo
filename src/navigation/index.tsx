import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, WelcomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

const Navigation =  () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}


export default Navigation;