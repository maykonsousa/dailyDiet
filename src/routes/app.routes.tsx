import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { DashBoard } from "@screens/DashBoard";
import { AddMeal } from "@screens/AddMeal";
import { Feedback } from "@screens/Feedback";


const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,

                contentStyle: {
                }
            }}
        >
            <Screen name="home" component={Home}/>
            <Screen name="dashboard" component={DashBoard} />
            <Screen name="addmeal" component={AddMeal} />
            <Screen name="feedback" component={Feedback} />
        </Navigator>
    )
}