import React from "react";
import { View, Button } from "react-native";

export default class Home extends React.Component {

  registerPhoneNumber = _ => {
    this.props.navigation.navigate('Register');
  } 
  
  loginPhoneNumber = _ => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 300, height: 80, justifyContent: 'space-between'}}>
          <Button
            onPress={this.registerPhoneNumber}
            title='Đăng ký'
          />
          <Button
            onPress={this.loginPhoneNumber}
            title='Đăng nhập'
          />
        </View>
      </View>
    )
  }

}
