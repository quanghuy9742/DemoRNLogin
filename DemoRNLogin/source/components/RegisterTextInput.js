import React from "react";
import { View, Text, TextInput, Platform } from "react-native";

export default RegisterTextInput = ({title, onChangeText}) => (
    <View style={[{flexDirection: 'row', height: 35, alignItems: 'center'},
            Platform.OS == 'android' ? {height: 40} : {}
        ]}>
        <Text style={{width: 130}}>{title}</Text>
        <View style={[{width: 200, height: '100%', borderWidth: 0.5, borderColor: 'black', justifyContent: 'center'},
            Platform.OS == 'android' ? {justifyContent: 'flex-end'} : {}
        ]}>
            <TextInput style={{color: 'black'}} onChangeText={onChangeText}/>
        </View>
    </View>
)