import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const RegisterTextInput = ({title, onChangeText}) => (
    <View style={{flexDirection: 'row', height: 35}}>
        <Text style={{width: 50}}>{title}</Text>
        <View style={{width: 200, borderWidth: 0.5, borderColor: 'black', justifyContent: 'center'}}>
            <TextInput onChangeText={onChangeText}/>
        </View>
    </View>
)

export default class Register extends React.Component {

    firstName = '';
    lastName = '';

    _onChangeFirstName = text => {
        this.firstName = text
    }

    _onChangeLastName = text => {
        this.lastName = text
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', paddingTop: 100}}>
                <View style={{justifyContent: 'space-between', height: 80, marginBottom: 32}}>
                    <RegisterTextInput title='Last Name: ' onChangeText={this._onChangeLastName}/>
                    <RegisterTextInput title='First Name: ' onChangeText={this._onChangeFirstName}/>
                </View>
                <Button
                    title='Đăng ký'
                />
            </View>
        );
    }

}