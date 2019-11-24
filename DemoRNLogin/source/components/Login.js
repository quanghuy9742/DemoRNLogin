import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import RegisterTextInput from './RegisterTextInput';

export default class Login extends React.Component {

    phoneNumber = '';
    password = '';

    _onChangePhoneNumber = text => {
        this.phoneNumber = text
    }

    _onChangePassword = text => {
        this.password = text
    }

    _login = _ => {
        try {
            const usersRef = database().ref(`/users/${this.phoneNumber}`);
            usersRef.once('value').then(async snapshot => {
                const data = snapshot.val();
                if(data == null) {
                    alert('Số điện thoại chưa được đăng ký');
                } else {
                    if(this.password !== data.password) {
                        alert('Sai mật khẩu');
                        return;
                    }
                    this.props.navigation.navigate('UserInfo', {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        password: data.password,
                    });
                }
            });     
        } catch(error) {
            alert('Không thể đăng nhập: ' + error.message);
        }   
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', paddingTop: 100}}>
                <View style={{justifyContent: 'space-between', marginBottom: 32, height: 90}}>
                    <RegisterTextInput title='Số điện thoại: ' onChangeText={this._onChangePhoneNumber}/>
                    <RegisterTextInput title='Mật khẩu: ' onChangeText={this._onChangePassword}/>
                </View>
                <Button
                    title='Đăng nhập'
                    onPress={this._login}
                />
            </View>
        );
    }

}