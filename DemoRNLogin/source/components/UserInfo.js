import React from "react";
import { View, Text } from "react-native";
export default class Register extends React.Component {

    render() {
        const navigation = this.props.navigation;
        const firstName = navigation.getParam('firstName', null);
        const lastName = navigation.getParam('firstName', null);
        const password = navigation.getParam('password', null);
        
        return(
            <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
                <Text>Last name: {lastName}</Text>
                <Text>Fist name: {firstName}</Text>
                <Text>Password: {password}</Text>
            </View>
        );
    }

}