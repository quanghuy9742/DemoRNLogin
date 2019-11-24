import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import RegisterTextInput from './RegisterTextInput';

export default class Register extends React.Component {

    firstName = '';
    lastName = '';
    phoneNumber = '';
    password = '';

    _onChangeFirstName = text => {
        this.firstName = text
    }

    _onChangeLastName = text => {
        this.lastName = text
    }

    _onChangePhoneNumber = text => {
        this.phoneNumber = text
    }

    _onChangePassword = text => {
        this.password = text
    }

    _onRegister = _ => {
        database().ref(`/users/${this.phoneNumber}`).once('value').then(async snapshot => {
            if(snapshot.val() !== null) {
                alert('Số điện thoại đã được đăng ký');
                return;
            }
                
            const result = await auth().signInWithPhoneNumber('+84' + this.phoneNumber, true);   
            this.props.navigation.navigate('Verify', {
                phoneNumber: this.phoneNumber,
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password,
                result: result
            });
        });
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
                <View style={{justifyContent: 'space-between', height: 180, marginBottom: 32}}>
                    <RegisterTextInput title='Last Name: ' onChangeText={this._onChangeLastName}/>
                    <RegisterTextInput title='First Name: ' onChangeText={this._onChangeFirstName}/>
                    <RegisterTextInput title='Phone number: ' onChangeText={this._onChangePhoneNumber}/>
                    <RegisterTextInput title='Password: ' onChangeText={this._onChangePassword}/>
                </View>
                <Button
                    onPress={_ => this._onRegister()}
                    title='Đăng ký'
                />
            </View>
        );
    }

}