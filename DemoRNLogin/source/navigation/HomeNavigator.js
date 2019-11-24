import HomeScreen from "../components/Home";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
import { createStackNavigator } from "react-navigation-stack";

export default HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Chức năng',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: 'green',
                    borderBottomWidth: 0,
                },
            })
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Đăng ký',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: 'green',
                    borderBottomWidth: 0,
                },
            })
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Đăng nhập',
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: 'green',
                    borderBottomWidth: 0,
                },
            })
        },
    },
    {
        headerMode: 'screen',
    }
);