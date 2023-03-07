import React from "react";
import { View, Button} from "react-native";
import { useNavigation} from '@react-navigation/native';

type StackParamList = {
    ScreenA: undefined,
    ScreanB: undefined,
}


export function ScreenA(){
    const navigation = useNavigation();
    return (
        <View style={{flex:1, backgroundColor: 'red', justifyContent:'center'}}>
            <Button
            title="Ir Tela azul"
            onPress={() => navigation.navigate('ScreenB')}
            />
        </View>
    );
}