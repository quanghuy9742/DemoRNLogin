import React from "react";
import { View, Text, TextInput, Alert, Button } from "react-native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const RegisterTextInput = ({title, onChangeText}) => (
    <View style={{flexDirection: 'row', height: 35}}>
        <Text style={{width: 50}}>{title}</Text>
        <View style={{width: 200, borderWidth: 0.5, borderColor: 'black', justifyContent: 'center'}}>
            <TextInput style={{color: 'black'}} onChangeText={onChangeText}/>
        </View>
    </View>
)

export default class Verify extends React.Component {

    otpCode = '';

    _onChangeOTPCode = text => {
        this.otpCode = text
    }

    _onConfirm = _ => {
        const confirmResult = this.props.navigation.getParam('result', null);
        const phoneNumber = this.props.navigation.getParam('phoneNumber', null);
        const firstName = this.props.navigation.getParam('firstName', null);
        const lastName = this.props.navigation.getParam('lastName', null);
        const password = this.props.navigation.getParam('password', null);

        // Handle user login
        confirmResult.confirm(this.otpCode).then(async user => {
            if(user == null) {
                alert('Mã xác thực sai');
                return;
            };
    
            const usersRef = database().ref(`/users/${phoneNumber}`);
            await usersRef.set({
                firstName: firstName,
                lastName: lastName,
                password: password,
                uid: user.uid
            });
    
            Alert.alert(
                'Thành công',
                'Đăng ký thành công !',
                [
                    {
                        text: 'OK',
                        onPress: _ => {
                            this.props.navigation.navigate('Home');
                        },
                    },
                ]
            );
        });
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', paddingTop: 100}}>
                <View style={{justifyContent: 'space-between', marginBottom: 32}}>
                    <RegisterTextInput title='OTP Code: ' onChangeText={this._onChangeOTPCode}/>
                </View>
                <Button
                    title='Xác nhận'
                    onPress={this._onConfirm}
                />
            </View>
        );
    }

}