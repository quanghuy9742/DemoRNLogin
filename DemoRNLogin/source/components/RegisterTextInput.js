import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default RegisterTextInput = ({title, onChangeText}) => (
    <View style={{flexDirection: 'row', height: 35, alignItems: 'center'}}>
        <Text style={{width: 130}}>{title}</Text>
        <View style={{width: 200, height: '100%', borderWidth: 0.5, borderColor: 'black', justifyContent: 'center'}}>
            <TextInput style={{color: 'black'}} onChangeText={onChangeText}/>
        </View>
    </View>
)