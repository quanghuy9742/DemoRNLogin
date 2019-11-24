import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { firebase } from '@react-native-firebase/auth';

const RegisterTextInput = ({title, onChangeText}) => (
    <View style={{flexDirection: 'row', height: 35}}>
        <Text style={{width: 50}}>{title}</Text>
        <View style={{width: 200, borderWidth: 0.5, borderColor: 'black', justifyContent: 'center'}}>
            <TextInput onChangeText={onChangeText}/>
        </View>
    </View>
)

export default class Login extends React.Component {

    phoneNumber = '';

    _onChangePhoneNumber = text => {
        this.phoneNumber = text
    }

    _login = async _ => {
        const result = await firebase.auth().signInWithPhoneNumber('0909179042', true);
        console.warn(result);
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', paddingTop: 100}}>
                <View style={{justifyContent: 'space-between', marginBottom: 32}}>
                    <RegisterTextInput title='Số điện thoại: ' onChangeText={this._onChangePhoneNumber}/>
                </View>
                <Button
                    title='Đăng nhập'
                    onPress={this._login}
                />
            </View>
        );
    }

}