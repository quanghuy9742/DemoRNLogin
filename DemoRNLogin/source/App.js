import React from 'react';
import { View } from "react-native";
import HomeNavigator from './navigation/HomeNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(HomeNavigator);
export default class App extends React.Component {

    render() {
        return(
            <AppContainer/>
        );
    }

}