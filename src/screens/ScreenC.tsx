import React from "react";
import { View} from "react-native";
import { useNavigation} from '@react-navigation/native';

export function ScreenC(){
    const navigation = useNavigation();
    return (
        <View style={{flex:1, backgroundColor: 'green', justifyContent:'center'}}>
        </View>
    );
}